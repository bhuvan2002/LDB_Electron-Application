from selenium import webdriver
import keyboard
import time

# Define the website URL
# url = "file:///C:/Users/Dell/Desktop/Internship/abc.html"

# Define the list of blocked keys
blocked_keys = ['alt', 'tab', 'ctrl', 'esc']

# Create a new Chrome browser instance
driver = webdriver.Chrome()

# Navigate to the website
driver.get(url)

# Define the function to block the keys
def block_keys():
    for key in blocked_keys:
        keyboard.block_key(key)  

        
# Set the browser window to full screen
driver.maximize_window()

# Define the function to unblock the keys
def unblock_keys():
    for key in blocked_keys:
        keyboard.unblock_key(key)


# Call the function to block the keys
block_keys()

# Wait for 1 minutes
time.sleep(60)

# Call the function to unblock the keys
unblock_keys()

# Close the browser
## driver.quit()


# In this modified code, we define a new function unblock_keys() that unblocks the keys. After waiting for 1 minutes using time.sleep(300), we call this function to unblock the keys.
# This way, the keys will be blocked for only 1 minutes.

#Note that this code still uses the keyboard library to block and unblock keys, which is not the recommended
#way to interact with the web page in Selenium. Instead, you should use Selenium's built-in methods to interact with 
# the web page. However, if you still want to use the keyboard library, this code should work for your use case.