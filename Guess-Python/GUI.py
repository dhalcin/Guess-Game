from tkinter import *
from tkinter import ttk

root = Tk()
root.title("Guess")
frm = ttk.Frame(root, padding=100)
frm.grid()
ttk.Label(frm, text="Guess-Python").grid(column=0, row=20)

root.mainloop()