def file_to_list(file_name: str) -> list:
    word_list = []
    with open(file_name) as file:
        lines = file.readlines()

        for line in lines:
            word_list.append(line.strip())

    return word_list


templates, words, conjunctions = file_to_list("input/templates.txt"), file_to_list("input/words.txt"), file_to_list("input/conjunctions.txt")

messages = []
combined_messages = []



# populate the messages list by concatinating template + word
for template in templates:
    for word in words:
        if "{0}, O {1}" in template:
            messages.append(template.format(word, word))
        
        else:
            messages.append(template.format(word))


# save single line messages to their own file
with open("output/messages.txt", "a") as message_file:
    for message in messages:
        message_file.write(message + "\n")



# total_messages is over 800 million which is way too big to open as a text file so I split it into 50
total_messages = len(messages)**2 * len(conjunctions)
number_of_output_files = 50
batch_size = total_messages / number_of_output_files

counter = 0
batch_number = 1

file_name = "output/combined_messages/combined_message{}.txt".format(batch_number)
file = open(file_name, "a")

for message1 in messages:
        for conjunction in conjunctions:
            for message2 in messages:
                counter += 1
                if counter <= batch_size:
                    file.write(message1 + " " + conjunction + " " + message2 + "\n")
                
                else:
                    file.close()
                    counter = 0
                    batch_number += 1

                    file_name = "output/combined_messages/combined_message{}.txt".format(batch_number)
                    file = open(file_name, "a")
                    file.write(message1 + " " + conjunction + " " + message2 + "\n")