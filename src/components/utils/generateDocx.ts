import { Document, Packer, Paragraph, TextRun} from 'docx';
import {saveAs} from 'file-saver'

export const generateDocx = async (initialContent: any) => {
  try {
    const paragraphs = initialContent.map((item: any) => {
    
      const textRuns = item.content.map((textItem: any) => {
        const text = textItem.text.slice(1, -1);
        return new TextRun({
            text: text,
            size: 30,
        });
      });

      return new Paragraph({
        children: textRuns,
      });
    });

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: paragraphs,
        },
      ],
    });

    const blob = await Packer.toBlob(doc);

    saveAs(blob, "documento.docx");
  } catch (error) {
    console.error(error);
  }
};