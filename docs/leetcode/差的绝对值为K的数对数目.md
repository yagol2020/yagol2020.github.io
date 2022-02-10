# 差的绝对值为K的数对数目

```java
import java.util.HashMap;

/**
 * @author yagol
 * @date 下午3:57
 * @desc the description of this class
 **/
class Solution2006 {

    /**
     * 循环2次
     *
     * @param nums
     * @param k
     * @return
     */
    public int countKDifference_old(int[] nums, int k) {
        int res = 0;
        for (int i = 0; i < nums.length - 1; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (Math.abs(nums[i] - nums[j]) == k) {
                    res++;
                }
            }
        }
        return res;
    }

    /**
     * 用HashMap存储出现过的次数
     *
     * @param nums
     * @param k
     * @return
     */
    public int countKDifference(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int res = 0;
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
            res += map.getOrDefault(num - k, 0) + map.getOrDefault(num + k, 0);
        }
        return res;
    }
}
```