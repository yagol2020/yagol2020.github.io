"""
用于将leetcode的源代码转移到markdown文件中
@author yagol
"""

import os

BASE_LEETCODE_CODE_HOME = "/home/yagol/IdeaProjects/LeetcodeDaily/src/main/java"
LEET_CODE_README_DIR = "/home/yagol/WebstormProjects/yagol2020.github.io/docs/leetcode"
java_file_names = os.listdir(BASE_LEETCODE_CODE_HOME)
readme_file_names = [name.replace(".md", "")
                     for name in os.listdir(LEET_CODE_README_DIR)]
with open("/home/yagol/WebstormProjects/yagol2020.github.io/docs/leetcode/README.md", "a") as index_file:
    for java_file_name in java_file_names:
        if java_file_name.replace(".java", "") not in readme_file_names:
            with open(os.path.join(BASE_LEETCODE_CODE_HOME, java_file_name), "r") as file:
                content = file.readlines()
                write_content = "# " + \
                    java_file_name.replace(".java", "")+"\n\n```java\n"
                for line in content:
                    write_content += line
                write_content += "\n```"
                with open(os.path.join(LEET_CODE_README_DIR, java_file_name.replace(".java", ".md")), "w") as readme_file:
                    readme_file.write(write_content)
                    index_file.write(
                        "* ["+java_file_name.replace(".java", "")+"](./"+java_file_name.replace(".java", ".md")+")\n")
        else:
            print("跳过 "+java_file_name)
