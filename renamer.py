# Function to rename multiple files 
import os 
  
PATH = "./"
def main(): 
    i = 0
      
    for filename in os.listdir(PATH): 
        dst ="shadowbox" + str(i) + ".jpg"
        src = PATH + filename 
        dst = PATH + dst 
          
        os.rename(src, dst) 
        i += 1
  
# Driver Code 
if __name__ == '__main__': 
      
    # Calling main() function 
    main() 