import fs from 'fs'
import path from 'path';

async function transcriptAudio(audioFilePath:string, apiKey:string) {
  try {
    if (!fs.existsSync(audioFilePath)) {
      throw new Error("El archivo de audio no existe.");
    }

    const audioFile = fs.readFileSync(audioFilePath);

    const formData = new FormData();
    const blob = new Blob([audioFile]);
    formData.append("file", blob, path.basename(audioFilePath));
    formData.append("model", "whisper-1");

    const response = await fetch(
      "",
      {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}` },
        body: formData,
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error en la API: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    const transcription = data.text;

    const base = path.basename(audioFilePath, path.extname(audioFilePath));
    const outputFilePath = path.join(
      path.dirname(audioFilePath),
      `${base}.transcription.txt`,
    );

    fs.writeFileSync(outputFilePath, transcription);
    console.log(`Transcripción guardada en: ${outputFilePath}`);

    return transcription;
  } catch (error:any) {
    console.error("Error durante la transcripción:", error.message);
    throw error;
  }
}

const audioPath = process.argv[2] ?? './audio.mp3';
const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  throw new Error("Falta OPENAI_API_KEY en variables de entorno.");
}

transcriptAudio(audioPath, openaiApiKey)
  .then(transcription => {
    console.log('transcripcion completada con exito');
    console.log(transcription);
  })
  .catch(error => {
    console.error("ERROR EN LA TRANSCRIPCION ", error);
  });
