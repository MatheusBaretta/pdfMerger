import PDFMerger from 'pdf-merger-js';
import * as fs from 'fs';
import * as path from 'path';

const merger = new PDFMerger();

async function main() {

    let folderPath = './';

    process.argv.forEach(function (val, index, array) {
        if (index == 2 && val) {
            if (fs.existsSync(val)) {
                folderPath = val;
            } else {
                console.log('Directory does not exist for: ' + val);
            }
        }
    });    

    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        const pdfFiles = files.filter(file => {
            return path.extname(file).toLowerCase() === '.pdf';
        });

        if (pdfFiles.length > 0) {
            console.log('PDF files found in the folder:');
            pdfFiles.forEach(pdfFile => {
                mergePdfFiles(pdfFile);
            });
        } else {
            console.log('No PDF files found in the folder.');
        }
    });
}

async function mergePdfFiles(pdfFile) {
    try {
        // Add PDF files to merge
        await merger.add(pdfFile); // Replace with your first PDF path

        // Save the merged PDF to a new file
        await merger.save('./merged.pdf'); // Specify your desired output path

        console.log('PDFs merged successfully!');
    } catch (error) {
        console.error('Error merging PDFs:', error);
    }
}

main();
