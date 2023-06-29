import random


def main():

    numberComputer = random.randint(1, 10)

    while True:
        try:
            userNumber = int(input("Enter Number from 1 to 10 : "))

        except ValueError:
            print("!Wrong value")

        else:
            if numberComputer == userNumber:
                print("You guessed the Number")
                break
            else:
                print("You didn´t guess the number, try again")

if __name__ == "__main__":
    main()