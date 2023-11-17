import pandas as pd
from matplotlib import pyplot as plt
from matplotlib.pyplot import cm, axes
import numpy as np

# plt.rcParams["figure.figsize"] = [7.00, 3.50]
# plt.rcParams["figure.autolayout"] = True
fig, ax = plt.subplots();
columns = ["nom", "ec_min","ec_max", "ph_min","ph_max","prod"  ]
df = pd.read_csv("les_plantes_clean.csv", usecols=columns)
#duplicate = df[df.duplicated()]
dodo = df.drop_duplicates(columns)
dodo = dodo.sort_values('nom')
#print(dodo)

dodo.to_csv('from_df_clean.csv')

# #print("Contents in csv file:", df)
# ax.scatter(df.nom, df.ec_max, marker='v',label="max EC")
# ax.scatter(df.nom, df.ec_min, marker='^', label="min EC")
# ax.scatter(df.nom, df.ph_max, marker='v', label="max Ph")
# ax.scatter(df.nom, df.ph_min, marker='^', label="min Ph")
# #ax.violinplot(df.ec_min,showmeans=False,showmedians=False)
# ax.grid(True)
# ax.legend()
# plt.show()