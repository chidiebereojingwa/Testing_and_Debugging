import data from "../../data/courses.json"


const numData = data.length

test('Number of items = 12', () => {
    expect(numData).toBe(12)    
})

test('Number of items to be greater than or equal to 12', () => {
    expect(numData).toBeGreaterThanOrEqual(12); 
})


const matchData = data[0].title

test('There is JS in this title', () => { 
    expect(matchData).toMatch(/JS/);
})

test('The title contains React', () => { 
    expect(matchData).toContain("React");
})


// Arrays

const data2 = ['React', 'React Native'];

test('The list of courses to contain React Native and React', () => { 
    expect(['React', 'React Native', 'MeteorJS']).toEqual(expect.arrayContaining(data2))
})

// Objects
test('The first course to have a property title', () => { 
    expect(data[0]).toHaveProperty('title');
})

test('The first course to have a property title and value', () => { 
    expect(data[0]).toHaveProperty('views','31,266');
})