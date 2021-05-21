categories=[
    {
        "types":["白色","紅色"]
        },
    {
        "types":["大","小"]
        }
        ]

for pre in categories[0]["types"]:
    for pos in categories[1]["types"]:
        print(pre,"->",pos)

for i in range(2):
    for j in range(2):
        pass
        #for k in range(categories[j]["types"])
        #print(categories[j]["types"][i])
        #print(categories[j]["types"][j])
    # print(categories[j]["types"][i])
# print(categories[0]["types"][0])
# print(categories[1]["types"][0])

# print(categories[0]["types"][0])
# print(categories[1]["types"][1])

# print(categories[0]["types"][1])
# print(categories[1]["types"][0])

# print(categories[0]["types"][1])
# print(categories[1]["types"][1])
