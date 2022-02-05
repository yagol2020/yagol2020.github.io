"""
用于将leetocde的源代码转移到markdown文件中
@author yagol
"""

import os
from tkinter.messagebox import QUESTION


print(__doc__)

BASE_LEETCODE_CODE_HOME = "/home/yagol/IdeaProjects/LeetcodeDaily/src/main/java"
QUEST_FILE_NAME = "黄金矿工.java"
if not os.path.exists(os.path.join(BASE_LEETCODE_CODE_HOME, QUEST_FILE_NAME)):
    print("欲导入的文件不存在,请检查")
    exit(-1)
with open(os.path.join(BASE_LEETCODE_CODE_HOME, QUEST_FILE_NAME), "r") as file:
    content = file.readlines()
    markdown_content = "# "+QUEST_FILE_NAME.replace(".java", "")+"\n"
    markdown_content += "```java\n"
    for line in content:
        markdown_content += line
    markdown_content += "\n```"
    print(markdown_content)
    with open("./docs/leetcode/"+QUEST_FILE_NAME.replace(".java", "")+".md", "w") as markdown_file:
        markdown_file.write(markdown_content)
    with open("./docs/leetcode/README.md", "a") as readme_file:
        readme_file.write("\n* ["+QUEST_FILE_NAME.replace(".java",
                          "")+"](./"+QUEST_FILE_NAME.replace(".java", "")+".md)")
