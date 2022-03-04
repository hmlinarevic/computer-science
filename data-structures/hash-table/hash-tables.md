# Hash Tables

## Introduction

- data lives in buckets

other names:

- hash maps
- maps
- un-ordered maps
- dictionaries
- objects

### How are created

- key value pairs
- hash function

Key is used as an index to where to find the value in memory.

key --> hash function --> stored in memory at specifc address (index, key) that was retured by hashing function --> stored both key and value

## Hash Function

- function that generates a value of fixed length for each input it gets
- one way (can't find out what the input was)
- idempotent
- really fast data access
- time complexity --> O(1)

## Operations

Insert --> O(1)
Lookup --> O(1) --> Can be O(n) because of collisions
Delete --> O(1)
Search --> O(1)

## Collisions

- k size of hash table
  Slow down reading --> O(n/k) --> remove constants --> O(n)

2 Common Ways to Deal with Collisions:

- linked lists
- seperate chaining

Keys can be of any data type

## Hash Tables - Review

Great:

- fast lookups (good collision resolution needed)
- fast inserts
- flexible keys

Not so great:

- un-ordered
- slow key iteration
