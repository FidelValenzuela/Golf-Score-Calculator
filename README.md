```markdown
# Golf Score Calculator

This JavaScript function calculates golf scores based on the par and number of strokes.

## Description

The `golfScore` function returns a description of the score based on these rules:

- **Hole-in-one!**: `strokesfor` is 1
- **Double Eagle or better**: `strokesfor` is three or more under `par`
- **Eagle**: `strokesfor` is two under `par`
- **Birdie**: `strokesfor` is one under `par`
- **Par**: `strokesfor` equals `par`
- **Bogey**: `strokesfor` is one over `par`
- **Double Bogey**: `strokesfor` is two over `par`
- **Go Home!**: `strokesfor` is three or more over `par`

## Usage

Call the function with `par` and `strokesfor` values:

```javascript
console.log(golfScore(5, 1)); // Hole-in-one!
console.log(golfScore(5, 3)); // Eagle
console.log(golfScore(5, 5)); // Par
console.log(golfScore(5, 8)); // Go Home!
```

## Export

The function can be exported for use in other modules:

```javascript
module.exports = golfScore;
```
```
