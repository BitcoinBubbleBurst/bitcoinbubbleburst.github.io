# @Author: Karthick <ramya>
# @Date:   2017-12-02T19:34:01+01:00
# @Last modified by:   ramya
# @Last modified time: 2017-12-02T23:40:14+01:00

from twitterscraper import query_tweets
import subprocess
from datetime import datetime
import json

def append_new_row(my_row):
    with open("tweet_sentiments.json", 'a') as json_data:
        json.dump(my_row, json_data, indent=4)

#https://stackoverflow.com/questions/268272/getting-key-with-maximum-value-in-dictionary
def return_key_with_max_value(my_dict):
    val=list(my_dict.values())
    key=list(my_dict.keys())
    return key[val.index(max(val))]

def get_latest_sentiment():
    neutral = 0
    pos = 0
    neg = 0
    for tweet in query_tweets('bitcoin', 3):
        tweet_text = "text="+tweet.text
        try:
            tweet_dict = eval(subprocess.check_output(['curl', '-d', tweet_text, "http://text-processing.com/api/sentiment/"]))['probability']
            if return_key_with_max_value(tweet_dict) == 'neutral':
                neutral += 1
            elif return_key_with_max_value(tweet_dict) == 'pos':
                pos += 1
            elif return_key_with_max_value(tweet_dict) == 'neg':
                neg += 1
        except:
            continue
    print("Time : {0}, Positive : {1}, Negative : {2}, Neutral : {3}".format(datetime.now(), pos, neg, neutral))
    append_new_row({"timestamp": str(datetime.now()), "Positive": pos, "Negative": neg, "Neutral": neutral})
    return

while(True):
    get_latest_sentiment()
