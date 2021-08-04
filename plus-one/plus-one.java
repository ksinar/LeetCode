class Solution {
    public int[] plusOne(int[] digits) {
        int len = digits.length;
        int array[];
        array = new int[len + 1];
        for(int i = (len - 1); i >=0; i--){
            if(digits[i] != 9){
                digits[i]++;
                break;
            }else{
                digits[i] = 0;
            }
            if((digits[0] == 0) && len > 0){
                digits[0]++;
                System.arraycopy(digits,0,array,0,len);
                array[len] = 0;
                return array;
            }
        }
        return digits;
    }
}