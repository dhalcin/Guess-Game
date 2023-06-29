from tkinter import *
from tkinter import ttk


def main():

    root = Tk()
    root.title("Guess")
    frm = ttk.Frame(root, padding=100)
    frm.grid()
    ttk.Label(frm, text="Guess-Python").grid(column=0, row=20)

    root.mainloop()


if __name__ == "__main__":
    main()
