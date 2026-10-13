class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pair = [(p, s) for p, s in zip(position, speed)]
        pair.sort(reverse=True)

        max_time = 0
        fleet = 0

        for p, s in pair:
            time = (target - p) / s
            
            if time > max_time:
                fleet += 1
                max_time = time

        return fleet
