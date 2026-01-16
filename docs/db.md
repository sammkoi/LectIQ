# db and backend design

xlsx -> db 



1. upload xlsx (name invariant)
    - option to select which glycans or wtv to overwrite / append to 
        (default -> add to that glycan, option to overwrite)
2. if xlsx has multiple sheets -> iterate over each sheet (each sheet as own df) 
3. 



can also directly update and add entries (manually)
- add numbers for each glycan




## tables

pairs
lectin | GLYTOUCANID | lectin glycan id

glycan info
GLYTOUCANID | glycan 

pair data
glectin glycan id | Kd | unit | std dev | source


source
source ref (link to source or DOI or something, will be PK) | source name | year



# adding / updating


# design questions
is the source going to be given as a DOI in the sheet, or something else

always xlsx ?

mobile ?



