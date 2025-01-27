//Data without geospatial info (latitude/logitude information)
const dataGeo = JSON.parse(`
    [
        {
            "ID": "7168958",
            "Time": "1933",
            "Entity": "Person",
            "Name": "Kurnz Henry M.",
            "Occupation": "Clerk",
            "Address": "27 Bridge St., Manhattan, New York, Manhattan, New York, United States",
            "Country/region": "United States",
            "State": "Massachusetts",
            "Gender": "Male",
            "Latitude": "40.70362002",
            "Longitude": "-74.01225536"
        },
        {
            "ID": "7168959",
            "Time": "1915",
            "Entity": "Person",
            "Name": "Lux J. B.",
            "Occupation": "Clerk",
            "Address": "4 Union Square, Manhattan, New York, Manhattan, New York",
            "Country/region": "Russia",
            "State": "NULL",
            "Gender": "NULL",
            "Latitude": "40.73555276",
            "Longitude": "-73.98981801"
        },
        {
            "ID": "7168960",
            "Time": "1915",
            "Entity": "Person",
            "Name": "McCormick M. J.",
            "Occupation": "Police",
            "Address": "475 4 Ave., Manhattan, New York, Manhattan, New York",
            "Country/region": "Norway",
            "State": "NULL",
            "Gender": "Female",
            "Latitude": "40.7455414",
            "Longitude": "-73.98270098"
        },
        {
            "ID": "7168961",
            "Time": "1915",
            "Entity": "Person",
            "Name": "McDonald E. H.",
            "Occupation": "Clerk",
            "Address": "380 W 125 St., Manhattan, New York, Manhattan, New York",
            "Country/region": "United Kingdom",
            "State": "NULL",
            "Gender": "Male",
            "Latitude": "40.81042335",
            "Longitude": "-73.95178696"
        },
        {
            "ID": "7168962",
            "Time": "1920",
            "Entity": "Company",
            "Name": "McKinley Square Casino",
            "Occupation": "NULL",
            "Address": "775 E 169 St., Manhattan, New York, Manhattan, New York",
            "Country/region": "Ireland",
            "State": "NULL",
            "Gender": "NULL",
            "Latitude": "40.7455414",
            "Longitude": "-73.98270098"
        },
        {
            "ID": "7168963",
            "Time": "1920",
            "Entity": "Company",
            "Name": "Maison Chevalier",
            "Occupation": "NULL",
            "Address": "141 Fulton St., Manhattan, New York, Manhattan, New York",
            "Country/region": "France",
            "State": "NULL",
            "Gender": "NULL",
            "Latitude": "40.71136583",
            "Longitude": "-74.00895991"
        },
        {
            "ID": "7168964",
            "Time": "1920",
            "Entity": "Person",
            "Name": "Hammer M.",
            "Occupation": "Laborer",
            "Address": "204 9 Ave., Manhattan, New York, Manhattan, New York",
            "Country/region": "United States",
            "State": "New York",
            "Gender": "Female",
            "Latitude": "40.74624872",
            "Longitude": "-74.00152062"
        },
        {
            "ID": "7168965",
            "Time": "1920",
            "Entity": "Company",
            "Name": "Madison Buffet Lunch",
            "Occupation": "NULL",
            "Address": "145 Madison Ave., Manhattan, New York, Manhattan, New York",
            "Country/region": "United States",
            "State": "Iowa",
            "Gender": "NULL",
            "Latitude": "40.74632028",
            "Longitude": "-73.98429964"
        },
        {
            "ID": "7168966",
            "Time": "1910",
            "Entity": "Person",
            "Name": "Rothman David",
            "Occupation": "Clerk",
            "Address": "195 Bowery St., Manhattan, New York, Manhattan, New York, Manhattan, New York",
            "Country/region": "Hungary",
            "State": "NULL",
            "Gender": "Male",
            "Latitude": "40.72196146",
            "Longitude": "-73.99354518"
        },
        {
            "ID": "7168967",
            "Time": "1915",
            "Entity": "Person",
            "Name": "Maggi H.",
            "Occupation": "Laborer",
            "Address": "103 W 38 St., Manhattan, New York, Manhattan, New York",
            "Country/region": "Germany",
            "State": "NULL",
            "Gender": "Female",
            "Latitude": "40.75272525",
            "Longitude": "-73.98645786"
        },
        {
            "ID": "7168968",
            "Time": "1910",
            "Entity": "Company",
            "Name": "Rothstein & Davidowitz",
            "Occupation": "NULL",
            "Address": "130 W 36 St., Manhattan, New York, Manhattan, New York",
            "Country/region": "Austria",
            "State": "NULL",
            "Gender": "NULL",
            "Latitude": "40.75127316",
            "Longitude": "-73.98712193"
        },
        {
            "ID": "7168969",
            "Time": "1920",
            "Entity": "Company",
            "Name": "Mahnken's Lunch",
            "Occupation": "NULL",
            "Address": "167 William St., Manhattan, New York, Manhattan, New York",
            "Country/region": "United States",
            "State": "Maine",
            "Gender": "NULL",
            "Latitude": "40.71079921",
            "Longitude": "-74.00565377"
        },
        {
            "ID": "7168970",
            "Time": "1915",
            "Entity": "Company",
            "Name": "Heller & Heller",
            "Occupation": "NULL",
            "Address": "528 7 Ave., Manhattan, New York, Manhattan, New York",
            "Country/region": "Austria",
            "State": "NULL",
            "Gender": "NULL",
            "Latitude": "40.75263949",
            "Longitude": "-73.98728316"
        },
        {
            "ID": "7168971",
            "Time": "1920",
            "Entity": "Person",
            "Name": "Maloney J. J.",
            "Occupation": "Porter",
            "Address": "791 7 Ave., Manhattan, New York, Manhattan, New York",
            "Country/region": "United Kingdom",
            "State": "NULL",
            "Gender": "Male",
            "Latitude": "40.76204775",
            "Longitude": "-73.98263806"
        },
        {
            "ID": "7168972",
            "Time": "1920",
            "Entity": "Person",
            "Name": "Mandl J.",
            "Occupation": "Laborer",
            "Address": "31 W 26 St., Manhattan, New York, Manhattan, New York",
            "Country/region": "Hungary",
            "State": "NULL",
            "Gender": "Female",
            "Latitude": "40.74474498",
            "Longitude": "-73.99061178"
        },
        {
            "ID": "7168973",
            "Time": "1910",
            "Entity": "Person",
            "Name": "Rozumkiewicz Michael",
            "Occupation": "Waiter",
            "Address": "1st Avenue, Manhattan, New York, Manhattan, New York",
            "Country/region": "Greece",
            "State": "NULL",
            "Gender": "Male",
            "Latitude": "40.72399929",
            "Longitude": "-73.98833764"
        },
        {
            "ID": "7168974",
            "Time": "1905",
            "Entity": "Company",
            "Name": "Hip Chong Low",
            "Occupation": "NULL",
            "Address": "203 W. 38 St., Manhattan, New York, Manhattan, New York",
            "Country/region": "China",
            "State": "NULL",
            "Gender": "NULL",
            "Latitude": "40.75438852",
            "Longitude": "-73.99057161"
        },
        {
            "ID": "7168975",
            "Time": "1905",
            "Entity": "Person",
            "Name": "Jacovitz Reuben",
            "Occupation": "Clerk",
            "Address": "77 Chrystie St., Manhattan, New York, Manhattan, New York",
            "Country/region": "Romania",
            "State": "NULL",
            "Gender": "Male",
            "Latitude": "40.72162887",
            "Longitude": "-73.98308248"
        },
        {
            "ID": "7168976",
            "Time": "1910",
            "Entity": "Person",
            "Name": "Yamada J.",
            "Occupation": "Laborer",
            "Address": "470 8 Ave, Manhattan, New York, Manhattan, New York",
            "Country/region": "Japan",
            "State": "NULL",
            "Gender": "Male",
            "Latitude": "40.75195525",
            "Longitude": "-73.99373048"
        },
        {
            "ID": "7168977",
            "Time": "1915",
            "Entity": "Company",
            "Name": "Maros & Terzoglos",
            "Occupation": "NULL",
            "Address": "300 E 23 St., Manhattan, New York, Manhattan, New York",
            "Country/region": "Italy",
            "State": "NULL",
            "Gender": "NULL",
            "Latitude": "40.73764708",
            "Longitude": "-73.97999879"
        },
        {
            "ID": "7168978",
            "Time": "1915",
            "Entity": "Person",
            "Name": "Adams Rose R.",
            "Occupation": "Other",
            "Address": "133 W 49 St., Manhattan, New York, Manhattan, New York",
            "Country/region": "United States",
            "State": "Ohio",
            "Gender": "Female",
            "Latitude": "40.74644159",
            "Longitude": "-73.99779513"
        },
        {
            "ID": "7168979",
            "Time": "1910",
            "Entity": "Person",
            "Name": "Zilzer Harry",
            "Occupation": "Clerk",
            "Address": "2130 Broadway, Manhattan, New York, Manhattan, New York",
            "Country/region": "United Kingdom",
            "State": "NULL",
            "Gender": "Male",
            "Latitude": "40.77460271",
            "Longitude": "-73.95150371"
        },
        {
            "ID": "7168980",
            "Time": "1915",
            "Entity": "Company",
            "Name": "Elsinger Ralph",
            "Occupation": "Clerk",
            "Address": "112 E. 23 St., Manhattan, New York, Manhattan, New York",
            "Country/region": "Canada",
            "State": "Nova Scotia",
            "Gender": "Male",
            "Latitude": "40.74024188",
            "Longitude": "-73.98620591"
        },
        {
            "ID": "7168981",
            "Time": "1910",
            "Entity": "Person",
            "Name": "Yan Kin",
            "Occupation": "Clerk",
            "Address": "400 6 Ave, Manhattan, New York, Manhattan, New York",
            "Country/region": "China",
            "State": "NULL",
            "Gender": "Male",
            "Latitude": "40.74420235",
            "Longitude": "-73.99210396"
        },
        {
            "ID": "7168982",
            "Time": "1915",
            "Entity": "Company",
            "Name": "Ferdinand & Littwin",
            "Occupation": "NULL",
            "Address": "38 W. 20 St., Manhattan, New York, Manhattan, New York",
            "Country/region": "United States",
            "State": "North Carolina",
            "Gender": "NULL",
            "Latitude": "40.73406286",
            "Longitude": "-73.9994535"
        },
        {
            "ID": "7168983",
            "Time": "1915",
            "Entity": "Company",
            "Name": "Gibson Restaurant Co.",
            "Occupation": "NULL",
            "Address": "22 W 17 St., Manhattan, New York, Manhattan, New York",
            "Country/region": "Ireland",
            "State": "NULL",
            "Gender": "NULL",
            "Latitude": "40.70912133",
            "Longitude": "-74.00708915"
        },
        {
            "ID": "7168984",
            "Time": "1895",
            "Entity": "Person",
            "Name": "Chacon Jase",
            "Occupation": "Porter",
            "Address": "177 W Broadway, Manhattan, New York, Manhattan, New York",
            "Country/region": "South America",
            "State": "NULL",
            "Gender": "Male",
            "Latitude": "40.7286446",
            "Longitude": "-73.99915458"
        },
        {
            "ID": "7168985",
            "Time": "1895",
            "Entity": "Person",
            "Name": "Cohen Abraham",
            "Occupation": "Laborer",
            "Address": "148  Delancey St., Manhattan, New York, Manhattan, New York",
            "Country/region": "Russia",
            "State": "NULL",
            "Gender": "Male",
            "Latitude": "40.71971379",
            "Longitude": "-73.98142983"
        },
        {
            "ID": "7168986",
            "Time": "1895",
            "Entity": "Company",
            "Name": "Delisle Brothers",
            "Occupation": "NULL",
            "Address": "557 W Broadway, Manhattan, New York, Manhattan, New York",
            "Country/region": "France",
            "State": "NULL",
            "Gender": "NULL",
            "Latitude": "40.70980392",
            "Longitude": "-74.00599679"
        },
        {
            "ID": "7168987",
            "Time": "1925",
            "Entity": "Company",
            "Name": "Kronenberg Inc.",
            "Occupation": "NULL",
            "Address": "3550 Broadway, Manhattan, New York, Manhattan, New York",
            "Country/region": "Denmark",
            "State": "NULL",
            "Gender": "NULL",
            "Latitude": "40.72075707",
            "Longitude": "-73.99948285"
        }
    ]
`)

module.exports = {
  dataGeo: dataGeo,
}
