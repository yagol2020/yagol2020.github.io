# 和为K的最少斐波那契数字数目

```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * @author your name
 * @date 上午10:10
 * @Desc the description of this class
 **/
class Solution1414 {
    public static void main(String[] args) {
        System.out.println(new Solution1414().findMinFibonacciNumbers(19));
    }

    List<Integer> data = new ArrayList<>();

    public int findMinFibonacciNumbers(int k) {
        data.add(1);
        data.add(1);
        findFibonacciNumbers(k);
        System.out.println(data);
        int count = 0;
        for (int i = data.size() - 1; i >= 0; i--) {
            if (k == 0) {
                break;
            }
            if (k >= data.get(i)) {
                k -= data.get(i);
                count++;
            }
        }
        return count;
    }

    public void findFibonacciNumbers(int k) {
        for (int i = 2; i <= k; i++) {
            int checkNumber = data.get(i - 1) + data.get(i - 2);
            if (checkNumber > k) {
                return;
            }
            data.add(checkNumber);
        }
    }
}

```