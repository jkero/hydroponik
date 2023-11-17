import pandas as pd

df = pd.read_csv('from_df_clean_no_ids.csv', header = 1)
df.to_json('les_plantes_7.json', orient = "values")