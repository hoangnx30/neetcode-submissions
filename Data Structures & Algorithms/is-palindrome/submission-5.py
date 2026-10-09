class Solution:
    def isPalindrome(self, s: str) -> bool:
        transform_text = s.lower()

        left, right = 0, len(s) - 1

        while left < right:
            while left < right and not self.alpha_num(transform_text[left]):
                left+=1
            
            while left < right and not self.alpha_num(transform_text[right]):
                right-=1
            
            if transform_text[left] != transform_text[right]:
                return False

            left += 1
            right -= 1

        return True

    def alpha_num(self, c):
        return (
            ord("A") <= ord(c) <= ord("Z")
            or ord("a") <= ord(c) <= ord("z")
            or ord("0") <= ord(c) <= ord("9")
        )
