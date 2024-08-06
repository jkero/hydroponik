var arr =[
{"nom":"Zucchini ","ec_min":"1.8","ec_max":"2.4","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Zucchini ","ec_min":"1.8","ec_max":"2.4","ph_min":"5.0","ph_max":"6.0"},
{"nom":"Wheatgrass ","ec_min":"0.8","ec_max":"1.2","ph_min":"6.0","ph_max":"7.0"},
{"nom":"Watermelon ","ec_min":"1.5","ec_max":"2.4","ph_min":"5.8","ph_max":"5.8"},
{"nom":"Watercress ","ec_min":"0.4","ec_max":"1.8","ph_min":"6.5","ph_max":"7.0"},
{"nom":"Watercress ","ec_min":"0.4","ec_max":"1.8","ph_min":"5.8","ph_max":"6.4"},
{"nom":"Watercress","ec_min":"0.4","ec_max":"1.8","ph_min":"6.8","ph_max":"6.8"},
{"nom":"Viola ","ec_min":"1.3","ec_max":"1.8","ph_min":"5.5","ph_max":"6.2"},
{"nom":"Vietnamese Coriander","ec_min":"1.2","ec_max":"1.8","ph_min":"6.5","ph_max":"6.8"},
{"nom":"Turnip ","ec_min":"1.8","ec_max":"2.4","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Turnip","ec_min":"1.8","ec_max":"2.4","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Tomato ","ec_min":"2.0","ec_max":"5.0","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Tomato","ec_min":"2.0","ec_max":"5.0","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Tomato","ec_min":"2.0","ec_max":"4.0","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Tomato","ec_min":"1.5","ec_max":"2.5","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Thyme ","ec_min":"0.8","ec_max":"1.6","ph_min":"5.5","ph_max":"7.0"},
{"nom":"Thyme","ec_min":"0.8","ec_max":"1.6","ph_min":"7.0","ph_max":"7.0"},
{"nom":"Tarragon ","ec_min":"1.0","ec_max":"1.8","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Taro","ec_min":"2.5","ec_max":"3.0","ph_min":"5.5","ph_max":"5.5"},
{"nom":"Swiss chard","ec_min":"1.8","ec_max":"2.3","ph_min":"6.0","ph_max":"7.0"},
{"nom":"Swiss Chard","ec_min":"1.8","ec_max":"2.3","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Swiss chard","ec_min":"1.6","ec_max":"2.3","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Sweet Potato","ec_min":"2.0","ec_max":"2.5","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Sweet Potato","ec_min":"2.0","ec_max":"2.5","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Sweet Granadilla","ec_min":"1.6","ec_max":"2.4","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Sweet Corn","ec_min":"1.6","ec_max":"2.4","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Sunflower ","ec_min":"1.2","ec_max":"1.8","ph_min":"5.5","ph_max":"6.8"},
{"nom":"Sunflower ","ec_min":"1.2","ec_max":"1.8","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Strawberry ","ec_min":"1.8","ec_max":"2.2","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Strawberry","ec_min":"1.8","ec_max":"2.2","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Strawberries ","ec_min":"1.0","ec_max":"1.4","ph_min":"5.0","ph_max":"5.5"},
{"nom":"Strawberries","ec_min":"1.8","ec_max":"2.2","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Stevia ","ec_min":"0.8","ec_max":"1.6","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Squash [Winter]","ec_min":"-1.0","ec_max":"-1.0","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Squash [Summer]","ec_min":"1.8","ec_max":"2.4","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Squash ","ec_min":"1.8","ec_max":"2.4","ph_min":"5.0","ph_max":"6.0"},
{"nom":"Spinach ","ec_min":"1.8","ec_max":"2.3","ph_min":"6.0","ph_max":"7.0"},
{"nom":"Spinach ","ec_min":"1.8","ec_max":"2.3","ph_min":"5.5","ph_max":"6.6"},
{"nom":"Spinach","ec_min":"1.8","ec_max":"2.3","ph_min":"6.6","ph_max":"6.6"},
{"nom":"Silverbeet","ec_min":"1.8","ec_max":"2.3","ph_min":"7.0","ph_max":"7.0"},
{"nom":"Savory ","ec_min":"1.8","ec_max":"2.4","ph_min":"6.5","ph_max":"7.0"},
{"nom":"Salad ","ec_min":"0.8","ec_max":"1.5","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Sage","ec_min":"1.0","ec_max":"1.6","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Sage","ec_min":"1.0","ec_max":"1.6","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Rosemary ","ec_min":"1.0","ec_max":"1.6","ph_min":"5.5","ph_max":"6.0"},
{"nom":"Rosemary","ec_min":"1.0","ec_max":"1.6","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Rose","ec_min":"1.5","ec_max":"2.5","ph_min":"5.5","ph_max":"6.0"},
{"nom":"Rocket ","ec_min":"0.8","ec_max":"1.2","ph_min":"6.0","ph_max":"7.5"},
{"nom":"Rhubarb ","ec_min":"1.6","ec_max":"2.0","ph_min":"5.0","ph_max":"6.0"},
{"nom":"Rhubarb","ec_min":"1.6","ec_max":"2.0","ph_min":"5.5","ph_max":"6.0"},
{"nom":"Rhubarb","ec_min":"1.6","ec_max":"2.0","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Red currant","ec_min":"1.4","ec_max":"1.8","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Radish ","ec_min":"1.6","ec_max":"2.3","ph_min":"6.0","ph_max":"7.0"},
{"nom":"Radish ","ec_min":"1.6","ec_max":"2.2","ph_min":"6.0","ph_max":"7.0"},
{"nom":"Radish","ec_min":"1.6","ec_max":"2.2","ph_min":"7.0","ph_max":"7.0"},
{"nom":"Radicchio","ec_min":"-1.0","ec_max":"-1.0","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Pumpkin ","ec_min":"1.8","ec_max":"2.4","ph_min":"5.5","ph_max":"7.5"},
{"nom":"Potato ","ec_min":"2.0","ec_max":"2.5","ph_min":"5.0","ph_max":"6.0"},
{"nom":"Potato","ec_min":"2.0","ec_max":"2.5","ph_min":"5.5","ph_max":"6.0"},
{"nom":"Pineapple ","ec_min":"2.0","ec_max":"2.4","ph_min":"5.5","ph_max":"6.0"},
{"nom":"Pineapple","ec_min":"2.0","ec_max":"2.4","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Peppers_Hot ","ec_min":"2.0","ec_max":"3.5","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Peppers_Bell ","ec_min":"2.0","ec_max":"2.5","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Peppers","ec_min":"2.0","ec_max":"3.0","ph_min":"6.3","ph_max":"6.3"},
{"nom":"Peppers","ec_min":"0.8","ec_max":"1.8","ph_min":"5.5","ph_max":"6.0"},
{"nom":"Pepino","ec_min":"2.0","ec_max":"5.0","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Peas [Sugar]","ec_min":"-1.0","ec_max":"-1.0","ph_min":"6.8","ph_max":"6.8"},
{"nom":"Pea ","ec_min":"0.8","ec_max":"1.8","ph_min":"6.0","ph_max":"7.0"},
{"nom":"Pea","ec_min":"0.8","ec_max":"1.8","ph_min":"7.0","ph_max":"7.0"},
{"nom":"Passionfruit","ec_min":"1.6","ec_max":"2.4","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Parsnip ","ec_min":"1.4","ec_max":"1.8","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Parsley ","ec_min":"0.8","ec_max":"1.8","ph_min":"5.5","ph_max":"6.0"},
{"nom":"Parsley","ec_min":"1.8","ec_max":"2.2","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Parsley","ec_min":"0.8","ec_max":"1.8","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Papaye","ec_min":"2.0","ec_max":"2.4","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Pak-choi","ec_min":"2.5","ec_max":"2.0","ph_min":"7.0","ph_max":"7.0"},
{"nom":"Pak Choi_Tatsoi","ec_min":"1.5","ec_max":"2.0","ph_min":"6.0","ph_max":"7.5"},
{"nom":"Pak Choi","ec_min":"1.5","ec_max":"2.0","ph_min":"7.0","ph_max":"7.0"},
{"nom":"Oregano ","ec_min":"1.8","ec_max":"2.3","ph_min":"6.0","ph_max":"7.0"},
{"nom":"Oregano ","ec_min":"1.8","ec_max":"2.3","ph_min":"6.0","ph_max":"6.8"},
{"nom":"Onions ","ec_min":"1.2","ec_max":"1.8","ph_min":"6.0","ph_max":"6.7"},
{"nom":"Onions","ec_min":"1.4","ec_max":"1.8","ph_min":"6.7","ph_max":"6.7"},
{"nom":"Okra ","ec_min":"2.0","ec_max":"2.4","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Nasturtium ","ec_min":"0.8","ec_max":"1.6","ph_min":"6.0","ph_max":"7.0"},
{"nom":"Mustard Greens","ec_min":"1.2","ec_max":"2.4","ph_min":"5.5","ph_max":"6.8"},
{"nom":"Mustard Cress","ec_min":"1.2","ec_max":"2.4","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Mustard Cress","ec_min":"1.3","ec_max":"2.4","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Mint ","ec_min":"2.0","ec_max":"2.4","ph_min":"5.5","ph_max":"6.0"},
{"nom":"Mint","ec_min":"2.0","ec_max":"2.4","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Melon ","ec_min":"2.0","ec_max":"2.5","ph_min":"5.5","ph_max":"6.0"},
{"nom":"Melon","ec_min":"2.0","ec_max":"2.5","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Marrow","ec_min":"1.8","ec_max":"2.4","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Marjoram ","ec_min":"1.6","ec_max":"2.3","ph_min":"6.0","ph_max":"7.0"},
{"nom":"Marjoram ","ec_min":"1.6","ec_max":"2.0","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Marigold ","ec_min":"1.0","ec_max":"3.6","ph_min":"5.8","ph_max":"6.5"},
{"nom":"Lettuce ","ec_min":"0.8","ec_max":"1.2","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Lettuce","ec_min":"1.2","ec_max":"1.8","ph_min":"6.0","ph_max":"7.0"},
{"nom":"Lettuce","ec_min":"0.8","ec_max":"1.2","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Lemon balm","ec_min":"1.0","ec_max":"1.6","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Lemon Balm","ec_min":"1.0","ec_max":"1.6","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Leeks ","ec_min":"1.4","ec_max":"1.8","ph_min":"6.5","ph_max":"7.0"},
{"nom":"Leek","ec_min":"1.4","ec_max":"1.8","ph_min":"6.5","ph_max":"7.0"},
{"nom":"Leek","ec_min":"1.4","ec_max":"1.8","ph_min":"7.0","ph_max":"7.0"},
{"nom":"Lavender ","ec_min":"1.0","ec_max":"1.4","ph_min":"6.4","ph_max":"6.8"},
{"nom":"Lavender","ec_min":"1.0","ec_max":"1.4","ph_min":"6.8","ph_max":"6.8"},
{"nom":"Kale ","ec_min":"1.6","ec_max":"2.5","ph_min":"5.5","ph_max":"6.8"},
{"nom":"Kale ","ec_min":"1.3","ec_max":"1.5","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Hot Peppers","ec_min":"3.0","ec_max":"3.5","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Hot peppers","ec_min":"1.4","ec_max":"1.8","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Ginger ","ec_min":"2.0","ec_max":"2.5","ph_min":"5.8","ph_max":"6.0"},
{"nom":"Garlic ","ec_min":"1.4","ec_max":"1.8","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Fodder","ec_min":"1.8","ec_max":"2.0","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Ficus","ec_min":"1.6","ec_max":"2.4","ph_min":"5.5","ph_max":"6.0"},
{"nom":"Fennel ","ec_min":"1.0","ec_max":"1.4","ph_min":"6.4","ph_max":"6.8"},
{"nom":"Fennel","ec_min":"1.0","ec_max":"1.4","ph_min":"6.8","ph_max":"6.8"},
{"nom":"Endive ","ec_min":"2.0","ec_max":"2.4","ph_min":"5.5","ph_max":"5.5"},
{"nom":"Endive","ec_min":"2.0","ec_max":"2.4","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Eggplant ","ec_min":"2.5","ec_max":"3.5","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Eggplant","ec_min":"2.5","ec_max":"3.5","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Eggplant","ec_min":"2.5","ec_max":"3.5","ph_min":"5.5","ph_max":"5.5"},
{"nom":"Edible Flower","ec_min":"1.5","ec_max":"1.5","ph_min":"5.5","ph_max":"6.0"},
{"nom":"Dill ","ec_min":"1.0","ec_max":"1.6","ph_min":"5.5","ph_max":"6.4"},
{"nom":"Dandelion ","ec_min":"1.0","ec_max":"1.8","ph_min":"5.8","ph_max":"6.5"},
{"nom":"Daisy ","ec_min":"1.2","ec_max":"1.8","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Cucumber ","ec_min":"1.8","ec_max":"3.0","ph_min":"5.8","ph_max":"6.0"},
{"nom":"Cucumber ","ec_min":"1.7","ec_max":"2.5","ph_min":"5.8","ph_max":"6.0"},
{"nom":"Cucumber","ec_min":"1.7","ec_max":"2.5","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Cucumber","ec_min":"1.7","ec_max":"2.0","ph_min":"5.0","ph_max":"5.5"},
{"nom":"Cress ","ec_min":"1.2","ec_max":"2.4","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Courgettes","ec_min":"1.8","ec_max":"2.4","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Coriander ","ec_min":"1.2","ec_max":"1.8","ph_min":"5.8","ph_max":"6.4"},
{"nom":"Collard greens","ec_min":"-1.0","ec_max":"-1.0","ph_min":"7.5","ph_max":"7.5"},
{"nom":"Collard Greens","ec_min":"1.6","ec_max":"2.5","ph_min":"5.5","ph_max":"6.8"},
{"nom":"Cilantro ","ec_min":"1.3","ec_max":"1.8","ph_min":"6.5","ph_max":"6.7"},
{"nom":"Cilantro ","ec_min":"1.2","ec_max":"1.8","ph_min":"5.8","ph_max":"6.4"},
{"nom":"Chives ","ec_min":"1.8","ec_max":"2.4","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Chives","ec_min":"1.8","ec_max":"2.4","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Chili ","ec_min":"1.8","ec_max":"2.8","ph_min":"5.8","ph_max":"6.3"},
{"nom":"Chicory","ec_min":"2.0","ec_max":"2.4","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Chickory ","ec_min":"2.0","ec_max":"2.4","ph_min":"5.5","ph_max":"6.0"},
{"nom":"Chervil ","ec_min":"0.8","ec_max":"1.8","ph_min":"5.5","ph_max":"6.0"},
{"nom":"Chamomile ","ec_min":"1.0","ec_max":"1.6","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Chamomile ","ec_min":"0.8","ec_max":"1.4","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Celery ","ec_min":"1.8","ec_max":"2.4","ph_min":"6.3","ph_max":"6.7"},
{"nom":"Celery ","ec_min":"1.8","ec_max":"2.4","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Cauliflower ","ec_min":"0.5","ec_max":"2.0","ph_min":"6.0","ph_max":"7.0"},
{"nom":"Cauliflower","ec_min":"0.5","ec_max":"2.0","ph_min":"7.0","ph_max":"7.0"},
{"nom":"Catnip ","ec_min":"1.0","ec_max":"1.6","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Carrots ","ec_min":"1.6","ec_max":"2.0","ph_min":"6.3","ph_max":"6.3"},
{"nom":"Carnation","ec_min":"2.0","ec_max":"3.5","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Capsicum","ec_min":"1.8","ec_max":"2.2","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Cabbage ","ec_min":"2.5","ec_max":"3.0","ph_min":"6.5","ph_max":"7.0"},
{"nom":"Cabbage","ec_min":"2.5","ec_max":"3.0","ph_min":"7.0","ph_max":"7.0"},
{"nom":"Bunching Onion","ec_min":"1.8","ec_max":"2.4","ph_min":"5.5","ph_max":"6.8"},
{"nom":"Brussels sprouts","ec_min":"2.5","ec_max":"3.0","ph_min":"6.5","ph_max":"7.5"},
{"nom":"Brussell Sprout","ec_min":"2.5","ec_max":"3.0","ph_min":"7.5","ph_max":"7.5"},
{"nom":"Brussel Sprouts","ec_min":"2.5","ec_max":"3.0","ph_min":"6.5","ph_max":"7.5"},
{"nom":"Broccoli ","ec_min":"2.8","ec_max":"3.5","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Broccoli","ec_min":"2.8","ec_max":"3.5","ph_min":"6.0","ph_max":"6.8"},
{"nom":"Broccoli","ec_min":"2.8","ec_max":"3.5","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Broad bean","ec_min":"1.8","ec_max":"2.2","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Broad Bean","ec_min":"1.8","ec_max":"2.2","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Bok_Choy ","ec_min":"1.5","ec_max":"2.0","ph_min":"6.5","ph_max":"7.0"},
{"nom":"Blueberry ","ec_min":"1.8","ec_max":"2.0","ph_min":"4.0","ph_max":"5.0"},
{"nom":"Black currant","ec_min":"1.4","ec_max":"1.8","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Bell peppers","ec_min":"2.0","ec_max":"2.5","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Bell Pepper","ec_min":"1.8","ec_max":"2.8","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Beetroot ","ec_min":"0.8","ec_max":"5.0","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Beetroot","ec_min":"0.8","ec_max":"5.0","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Beans [Pole]","ec_min":"-1.0","ec_max":"-1.0","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Beans [Lima]","ec_min":"-1.0","ec_max":"-1.0","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Beans [Italian bush]","ec_min":"-1.0","ec_max":"-1.0","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Beans ","ec_min":"1.8","ec_max":"2.5","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Bean [Common]","ec_min":"2.0","ec_max":"2.4","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Bean ","ec_min":"1.8","ec_max":"2.4","ph_min":"6.0","ph_max":"6.5"},
{"nom":"Bean","ec_min":"2.0","ec_max":"4.0","ph_min":"6.0","ph_max":"6.0"},
{"nom":"Basil ","ec_min":"1.0","ec_max":"1.6","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Basil","ec_min":"1.0","ec_max":"1.6","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Basil","ec_min":"1.0","ec_max":"1.6","ph_min":"5.5","ph_max":"6.0"},
{"nom":"Banana ","ec_min":"1.8","ec_max":"2.2","ph_min":"5.5","ph_max":"6.5"},
{"nom":"Banana","ec_min":"1.8","ec_max":"2.2","ph_min":"6.5","ph_max":"6.5"},
{"nom":"Asparagus ","ec_min":"1.4","ec_max":"1.8","ph_min":"6.0","ph_max":"6.8"},
{"nom":"Asparagus","ec_min":"1.4","ec_max":"1.8","ph_min":"6.8","ph_max":"6.8"},
{"nom":"Arugula ","ec_min":"0.8","ec_max":"1.8","ph_min":"6.0","ph_max":"7.5"},
{"nom":"Arugula ","ec_min":"0.8","ec_max":"1.4","ph_min":"5.5","ph_max":"6.8"},
{"nom":"Artichoke ","ec_min":"0.8","ec_max":"1.8","ph_min":"6.5","ph_max":"7.5"},
{"nom":"Artichoke","ec_min":"0.8","ec_max":"1.8","ph_min":"7.5","ph_max":"7.5"},
{"nom":"Anise ","ec_min":"0.9","ec_max":"1.4","ph_min":"5.8","ph_max":"6.4"},
{"nom":"African Violet","ec_min":"1.2","ec_max":"1.5","ph_min":"6.0","ph_max":"7.0"}
];


$(function() {
    $('#headings th').on('click', function() {
        var attr = $(this).attr('data-attr');
        var asc = (!$(this).attr('data-asc')); // switch the order, true if not set
        
        // clear any previous sort order indicators
        $('#headings th').each(function() {
            $(this).removeAttr('data-asc');
        });
        // set sort order indicator
        if (asc) {
            $(this).attr('data-asc', 'asc');
        }

        sortResults(attr, asc);
    });
        
    renderResults();
});

function sortResults(prop, asc) {
    arr.sort(function(a, b) {
        if (asc) {
            return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        } else {
            return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
    });
    renderResults();
}

function renderResults () {
    var html = '';
    for (var e in arr) {
        html += '<tr>'
            +'<td>'+arr[e].nom+'</td>'
            +'<td>'+arr[e].ec_min+'</td>'
            +'<td>'+arr[e].ec_max+'</td>'
            +'<td>'+arr[e].ph_min+'</td>'
            +'<td>'+arr[e].ph_max+'</td>'
        +'</tr>';
    }
    $('#results').html(html);


}
