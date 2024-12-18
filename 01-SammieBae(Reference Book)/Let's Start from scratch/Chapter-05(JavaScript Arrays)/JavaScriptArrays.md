# `JavaScript Arrays`

- Arrays is data structure.
- It stores collection of elements.
- In a Contiguous block of memory.
- It forms the basis of more complex data structure like _matrices, heaps, and Hash Tables._

## `What Does "Contiguous Block of Memory" Mean?`

A Contiguous block of memory means that all elements of an array are stored next to each other in a single, uninterrupted block of memory addresses in the Computer's RAM. This Layout ensures that:

1. Each element is directly accessible by its index.
2. There are no gaps or interruptions between elements in memory.

---

### Example of Contiguous Memory

Suppose we create an array of integers in a language like C:

```c
int arr[4] = {10, 20, 30, 40};
```

Here’s how this array might be stored in memory:

| Index | Element | Memory Address (example) |
| ----- | ------- | ------------------------ |
| 0     | 10      | 0x1000                   |
| 1     | 20      | 0x1004                   |
| 2     | 30      | 0x1008                   |
| 3     | 40      | 0x100C                   |

- If each integer takes **4 bytes**, the memory addresses increase by **4 bytes** for each subsequent element.
- The memory addresses are **consecutive** without gaps.

---

### Why Does Contiguous Memory Matter?

1. **Direct Access via Indexing:**

   - Since the elements are stored in a continuous block, the address of any element can be calculated in constant time using:
     ```
     Address = BaseAddress + (Index * SizeOfElement)
     ```
   - For example, to access `arr[2]` (value `30`), the address would be:
     ```
     Address = 0x1000 + (2 * 4) = 0x1008
     ```

2. **Performance Benefits:**

   - **Cache Efficiency:** Contiguous memory allows the CPU to load chunks of memory into its cache more effectively, speeding up access to array elements.
   - **Iteration Optimization:** When looping through the array, accessing adjacent memory is faster than jumping between scattered locations.

3. **Low Overhead:**
   - Contiguous memory allocation minimizes overhead compared to non-contiguous data structures like linked lists, where extra memory is needed for pointers.

---

### Non-Contiguous Memory Example

Contrast this with a **linked list**, where elements are scattered across different memory addresses and connected via pointers:

| Element | Value | Memory Address | Pointer (Next Address) |
| ------- | ----- | -------------- | ---------------------- |
| Node 1  | 10    | 0x2000         | 0x3000                 |
| Node 2  | 20    | 0x3000         | 0x5000                 |
| Node 3  | 30    | 0x5000         | NULL                   |

- The elements are not next to each other.
- Accessing a specific node requires traversing the list from the beginning, making random access slower.

---

### Arrays in Dynamic Memory Allocation

In dynamic arrays (e.g., `std::vector` in C++ or JavaScript arrays), **contiguous memory** is also initially allocated. However, if the array grows beyond its capacity, a larger contiguous block of memory is allocated, and the existing elements are copied over to the new block.

For example:

- Initially, an array of size `4` might have memory at `0x1000`.
- If resized to hold `8` elements, a new block at, say, `0x2000`, will be allocated, and elements will be copied.

---

### `Resizing`

In JavaScript, when an **array grows beyond its current allocated capacity**, its underlying memory layout may change. Here's what happens:

1. **Dynamic Resizing:**  
   JavaScript arrays behave like **dynamic arrays**, meaning they can grow or shrink. When an array exceeds its allocated capacity:

   - A **new, larger block of memory** is allocated.
   - Existing elements are **copied** to the new memory location.
   - The old memory is released.

2. **Memory Address Changes:**  
   Since a new block of memory is allocated during resizing, the **array's memory address changes dynamically**. However, this process is abstracted from us in JavaScript, and we don’t need to manage it manually.

---

### Example in Short:

1. Start with a small array:

   ```javascript
   let arr = [1, 2];
   ```

   - Memory allocated for `arr` (e.g., at address `0x1000`).

2. Add more elements beyond the current capacity:

   ```javascript
   arr.push(3, 4, 5);
   ```

   - JavaScript reallocates a larger block of memory (e.g., `0x2000`) to fit all elements and copies `[1, 2, 3, 4, 5]` there.

---

### Key Insight:

- **Efficient, but not constant-time:** Resizing happens **infrequently**, so most `push` operations are `O(1)`, but resizing itself is **O(n)** (because of copying).
- We don’t observe or control memory changes directly, but they happen under the hood.

This is how JavaScript arrays maintain flexibility while using dynamic resizing!

# `Does this work same in JavaScript?`

No!

**_Why_**

Because ::

- **JavaScript array are not contiguous block of memory like in low-level languages.**
- **Instead, they are objects with special behavior.**
  - Where keys are indices
  - And values are the elements.
  - Internally, in JavaScript every array has an extra key-value pair is **_length_**
