# pdfMerger
Merge pdf files into single one!

This NodeJS project is pretty simple one.
The main usage is running this application inside a folder filled with .pdf files and get a merged one as result.

The application accepts 2 arguments:
First: The directory path to find the pdf files. (Default: ./)
Second: The merged pdf name. (Default: merged)

# Installation
Just npm install should be enough. I just used @types/node and pdf-merger-js for this project.

# For the extra credit:
 I would create an extra arguments to get X files to transform to Y files, for example: node main.js ./ merge doc pdf
 It would check 5 and 6 args and then start to convert and merge the documents.
