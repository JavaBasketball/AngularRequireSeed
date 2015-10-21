package com.golden.x.main;

public class XZero {
	  public static void transfer(int input) {
//        String[] str = { "零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖" };
        String[] upperArray = { "零", "一", "二", "三", "四", "五", "六", "七", "八", "九" };
//        String ss[] = new String[] { "元", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿" };
//        String ss[] = new String[] { "个", "十", "百", "千", "万", "十", "百", "千", "亿" };
//        String unitArray[] = new String[] {"", "十", "百", "千", "万", "十", "百", "千", "亿" };
        String[] unitArray = {"", "十", "百", "千", "万", "十", "百", "千", "亿" };
        String inputStr = String.valueOf(input);
        System.out.println(inputStr);
        StringBuffer output = new StringBuffer();
        for (int i = 0; i < inputStr.length(); i++) {
            String index = String.valueOf(inputStr.charAt(i));
            output = output.append(upperArray[Integer.parseInt(index)]);
        }
        String sss = String.valueOf(output);
        int i = 0;
        for (int j = sss.length(); j > 0; j--) {
        	output = output.insert(j, unitArray[i++]);
        }
        
        String temp = output.toString();
        //String result = temp.replace("十零", "十").replace("百零零", "百");
        String result = temp;
        System.out.println(result);
    }
	  
	public static void main(String[] args) {
		transfer(900000030);
	}
}
