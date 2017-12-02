import json
import requests

headers = {'Accept': 'application/json'}
url = "https://api.coindesk.com/v1/bpi/currentprice.json"
r = requests.get(url, headers=headers)

#response =  r.text["time"]["updated"]
#for account in session.accounts:
#    print(account.name)
#    print(account.balance)

response_data = r.json()
print("$" + response_data["bpi"]["USD"]["rate"])


#print(r.text)
#print(response["time"].text)



