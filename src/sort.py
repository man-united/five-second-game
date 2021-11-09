import os
import sys

questions = []

file = open(os.path.join(sys.path[0], "questions.txt"), "r")
for line in file:
    if line[0] != '3':
        continue
    qn = f'"Name {line.rstrip()}.",\n'
    questions.append(qn)
file.close()


file = open(os.path.join(sys.path[0], "formatted-qns.txt"), "w")
for qn in questions:
    file.write(qn)
file.close()
