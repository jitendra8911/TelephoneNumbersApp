package jitendra.businessLogic;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class TelephoneNumbersComputation {
	static Map<Character, String> alphaNumericMapping = new HashMap<Character, String>();
	static{
		alphaNumericMapping.put('0', "");
        alphaNumericMapping.put('1', "");
        alphaNumericMapping.put('2', "ABC");
        alphaNumericMapping.put('3', "DEF");
        alphaNumericMapping.put('4', "GHI");
        alphaNumericMapping.put('5', "JKL");
        alphaNumericMapping.put('6', "MNO");
        alphaNumericMapping.put('7', "PQRS");
        alphaNumericMapping.put('8', "TUV");
        alphaNumericMapping.put('9', "WXYZ");
    }
    
    static HashMap<Integer, ArrayList<String>> phoneKeyMapper;
    
    public static ArrayList<String> findAllCombinations(String digits) {
        ArrayList<String> res = new ArrayList<String>();
        startComputing(digits,res);
        return res;
    }
    

    
    
  private static void startComputing(String digits,ArrayList<String> res){
	  
	  for(int i=0;i<digits.length();i++)
	  {
		  String letters = alphaNumericMapping.get(digits.charAt(i));
		  StringBuffer buf=new StringBuffer(digits);
		  for(int j=0;j<letters.length();j++)
		  {
			  buf.setCharAt(i, letters.charAt(j));
			  res.add(buf.toString());
		  }
	  }
  }    
    
 
    
}