class Node:
    def __init__(self, key: int = 0, val: int = 0):
        self.key = key
        self.val = val
        self.next = None
        self.prev = None


class LRUCache:
    def __init__(self, capacity: int):
        self.cache = {}
        self.capacity = capacity
        self.head = Node()
        self.tail = Node()

        self.head.next = self.tail
        self.tail.prev = self.head

    def remove(self, node: Node) -> None:
        prev_node, next_node = node.prev, node.next

        prev_node.next = next_node
        next_node.prev = prev_node

    def add_to_front(self, node: Node) -> None:
        node.next = self.head.next
        node.prev = self.head

        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1

        node = self.cache[key]
        self.remove(node)
        self.add_to_front(node)

        return node.val

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            node.val = value
            self.remove(node)
            self.add_to_front(node)
        else:
            new_node = Node(key, value)
            self.cache[key] = new_node
            self.add_to_front(new_node)

            if len(self.cache) > self.capacity:
                lru_node = self.tail.prev
                self.remove(lru_node)
                del self.cache[lru_node.key]
