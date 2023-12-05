import pandas as pd

df = pd.read_csv('from_df_clean_no_ids.csv', sep=',', header = 0, index_col = False)
df.to_json('les_plantes_8b.json', orient = "records")