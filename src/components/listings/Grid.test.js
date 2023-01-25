import data from "../../data/courses.json"


const numData = data.length

test('Number of items = 12', () => {
    expect(numData).toBe(11)    
})

test('Number of items to be greater than or equal to 12', () => {
    expect(numData).toBeGreaterThanOrEqual(12); 
})

