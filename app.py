from flask import Flask, render_template, request
import pickle

from pygments.lexers import q

with open("models/products.pkl", "rb") as f:
    products = pickle.load(f)

with open("models/similarity.pkl", "rb") as f:
    similarity = pickle.load(f)

with open("models/products_with_tags.pkl", "rb") as f:
    products_with_tags = pickle.load(f)

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', data=None)

def search_product(query, product_list):
    query_words = query.lower().split()
    for product_name in product_list:
        product_name_lower = product_name.lower()
        if all(word in product_name_lower for word in query_words):
            return product_name
    return None


@app.route('/recommend', methods=['POST'])

def recommend():
    user_input = request.form.get('user_input')
    if not user_input or not user_input.strip():
        return render_template('index.html', data=[])

    product_name = search_product(user_input, list(products_with_tags['Product Name']))
    data = []

    if product_name:
        product_index = products_with_tags[products_with_tags['Product Name'] == product_name].index[0]

        for i in sorted(list(enumerate(similarity[product_index])), reverse=True, key=lambda x: x[1])[1:21]:
            product = products_with_tags.iloc[i[0]]['Product Name']
            temp_df = products[products['Product Name'] == product]
            item = [temp_df['Product Image Url'].values[0],
                    temp_df['Product Name'].values[0],
                    temp_df['Product Description'].values[0],
                    temp_df['Product Price'].values[0],
                    temp_df['Product Rating'].values[0],
                    temp_df['Product Reviews Count'].values[0]]

            data.append(item)

    return render_template('index.html', data=data)


if __name__ == '__main__':
    app.run(debug=True)