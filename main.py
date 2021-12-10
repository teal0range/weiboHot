import subprocess
import requests as re
from urllib import parse

close_time_url = "https://api.weibotop.cn/getclosesttime?"
current_item_url = "https://api.weibotop.cn/currentitems?"


def decodeAnswers(text):
    process = subprocess.Popen(['node', 'decodeResult.js', text],
                               stdout=subprocess.PIPE,
                               stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    return eval(stdout.strip().decode("utf8"))


def encodeTime(formattedTime):
    process = subprocess.Popen(['node', 'encodeTime.js', formattedTime],
                               stdout=subprocess.PIPE,
                               stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    return stdout.strip()


def fetchResult(timeStamp):
    """
    根据时间获取结果
    :param timeStamp: format like "2021-12-02T22:06:08"
    :return:
    """
    time_id, acc_time = re.get(close_time_url + parse.urlencode({"timestamp": encodeTime(timeStamp)})).json()
    parsed_list = decodeAnswers(re.get(current_item_url + parse.urlencode({"timeid": encodeTime(str(time_id))})).text)
    json_dict = [{"标题": item[0], "最后在榜": item[1], "上榜时间": item[2], "热度": int(item[3])} for item in parsed_list]
    return json_dict


if __name__ == '__main__':
    print(fetchResult("2021-12-02T22:06:08"))