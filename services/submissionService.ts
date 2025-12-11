import { StudentSubmission } from "../types";

// =========================================================================================
// ⚠️ CONFIGURACIÓN NECESARIA
// =========================================================================================
// 1. Copia el código que está AL FINAL de este archivo (el bloque comentado).
// 2. Pégalo en tu proyecto de Google Apps Script (Extensiones > Apps Script).
// 3. Publica como Aplicación Web (Acceso: "Cualquier persona").
// 4. Pega la URL que te den aquí abajo:
const GOOGLE_SCRIPT_WEB_APP_URL: string = "https://script.google.com/macros/s/AKfycbwOLVPdmZJMS3ekOYZiNGhfEmZHNqzBk5980fdblwO71AhW-IeI5b7yc_GVFqxXTdE8/exec"; 

/**
 * Convierte un archivo File a Base64 para enviarlo a Google Apps Script.
 */
const fileToBase64 = (file: File): Promise<{ name: string, type: string, data: string }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Eliminamos el prefijo "data:image/png;base64," para enviar solo los bytes
      const base64Data = result.split(',')[1];
      resolve({
        name: file.name,
        type: file.type,
        data: base64Data
      });
    };
    reader.onerror = error => reject(error);
  });
};

/**
 * Envía la evaluación y los archivos al script de Google.
 * @param submission Datos del estudiante y archivos
 * @param finalScore Nota final calculada
 * @param detailedReport String formateado con el detalle de respuestas y puntajes
 */
export const submitAssessment = async (
  submission: StudentSubmission, 
  finalScore: number,
  detailedReport: string
): Promise<boolean> => {
  console.log("Iniciando envío de datos...");

  if (!GOOGLE_SCRIPT_WEB_APP_URL || GOOGLE_SCRIPT_WEB_APP_URL.length < 10) {
    console.warn("⚠️ URL del Script no configurada en submissionService.ts");
    // Simulamos éxito si no hay URL para probar la UI
    await new Promise(resolve => setTimeout(resolve, 2000));
    return true; 
  }

  try {
    // 1. Convertir imágenes a Base64
    const processedFiles = await Promise.all(submission.files.map(f => fileToBase64(f)));

    // 2. Preparar datos
    // Nota: Usamos detailedReport en lugar de transformar submission.answers aquí
    const payload = {
      studentName: submission.studentName,
      studentId: submission.studentId,
      score: finalScore,
      answers: detailedReport, 
      files: processedFiles
    };

    // 3. Enviar a Google
    const response = await fetch(GOOGLE_SCRIPT_WEB_APP_URL, {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    
    if (result.status === 'success') {
      return true;
    } else {
      throw new Error(result.message || "Error desconocido del servidor");
    }

  } catch (error) {
    console.error("Error al enviar la evaluación:", error);
    throw error;
  }
};

/*
====================================================================================================
 CÓDIGO PARA GOOGLE APPS SCRIPT (COPIAR DESDE AQUÍ HACIA ABAJO)
====================================================================================================

function doPost(e) {
  // ==========================================
  // CONFIGURACIÓN
  // ==========================================
  // ID de tu carpeta de Drive (extraído de tu enlace)
  var PARENT_FOLDER_ID = "1sGaIEt8O-ZETJypSCuKUT-Yq9Hbq7K_A"; 
  // ==========================================

  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Esperar hasta 10 segundos para evitar conflictos de escritura

  try {
    // 1. Leer los datos que llegan desde la web
    var data = JSON.parse(e.postData.contents);
    var studentName = data.studentName;
    var studentId = data.studentId; // Aquí llega la Cédula
    var score = data.score;
    var answersRaw = data.answers; // Texto detallado pre-formateado
    var filesData = data.files; // Esto es una lista de archivos
    var timestamp = new Date();

    // 2. Preparar la hoja de cálculo
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getActiveSheet();
    
    // Si la hoja está vacía, poner encabezados
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Marca temporal", "Nombre Estudiante", "Cédula", "Nota Final (/20)", "Enlace Carpeta Evidencia", "Detalle de Respuestas"]);
    }

    // 3. Crear una carpeta única para el estudiante dentro de la carpeta principal
    var parentFolder = DriveApp.getFolderById(PARENT_FOLDER_ID);
    
    // FORMATO DE LA CARPETA: "Nombre - Cédula"
    var folderName = studentName + " - " + studentId;
    
    // Crear la carpeta
    var studentFolder = parentFolder.createFolder(folderName);
    
    // 4. Guardar CADA imagen subida dentro de esa carpeta nueva
    if (filesData && filesData.length > 0) {
      for (var i = 0; i < filesData.length; i++) {
        var fileInfo = filesData[i];
        if (fileInfo.data) {
          // Decodificar el base64 y crear el archivo
          var decodedBytes = Utilities.base64Decode(fileInfo.data);
          var blob = Utilities.newBlob(decodedBytes, fileInfo.type, fileInfo.name);
          studentFolder.createFile(blob);
        }
      }
    }

    // 5. Registrar todo en el Excel (Incluyendo el link a la carpeta creada)
    sheet.appendRow([
      timestamp, 
      studentName, 
      studentId, 
      score, 
      studentFolder.getUrl(), // <--- AQUÍ GUARDAMOS EL LINK A LA CARPETA
      answersRaw
    ]);

    // 6. Responder éxito
    return ContentService.createTextOutput(JSON.stringify({ 'status': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Responder error
    return ContentService.createTextOutput(JSON.stringify({ 'status': 'error', 'message': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
*/