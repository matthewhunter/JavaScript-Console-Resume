// Variables
const me = {
    name: 'Matthew Hunter',
    career: 'Future Programmer and current Corporate Trainer',
    description: 'Motivated individual who unfortunately hasn\'t updated his resume in quite a while.',
    interests: ['Coding as a hobby', 'Coding for work (in secret)', 'Binge-watching TV shows on Netflix', 'Spending time with family'],
    previousExperience: [{
        companyOrPlace: 'Covalence.io',
        title: 'Full-Stack Web Development',
        description: 'Learning programming skills in HTML, CSS, JavaScript, Nodejs, React, TypeScript, SQL, and React Native.'
    }, {
        companyOrPlace: 'T-Mobile',
        title: 'Virtual Trainer',
        description: 'Utilize independent and collegiate studies in various programming languages to implement training management systems while acting as a remote virtual training facilitator.'
    }, {
        companyOrPlace: 'Tulsa Community College',
        title: 'Associates in Science in Computer Information Systems',
        description: 'Studied HTML, CSS, C, C++, and Java.'
    }],
    skills: [{
        name: 'JavaScript',
        cool: true
    }, {
        name: 'C / C++',
        cool: false
    }, {
        name: 'Java',
        cool: false
    }, {
        name: 'HTML / CSS',
        cool: true
    }, {
        name: 'Public Speaking',
        cool: true
    }]
}

// Your name
// Your name should print in all capital letters, but you must not type it as all capitalized in your code (i.e. you will need to use JavaScript to capitalize it)
console.log(`Name: ${me.name.toUpperCase()}`)

// Your career/field
console.log(`Career: ${me.career}`)

// A short description of yourself
console.log(`Description: ${me.description}\n`)

// A list of your interests
console.log(`My Interests:`)
for (let i = 0; i < me.interests.length; i++) {
    console.log(`* ${me.interests[i]}`)
}

// You must have a function called displayPosition that takes parameters for company name, job title, and description. The function should console.log those three items in a format similar to the example below. You will call displayPosition several times with different data.
function displayPosition(companyOrPlace, title, description) {
    console.log(`* ${title} at ${companyOrPlace} - ${description}`)
}

// A list of your past positions that includes company/place name, title, short description of what you did
console.log(`My Previous Experience:`)
for (let i = 0; i < me.previousExperience.length; i++) {
    displayPosition(me.previousExperience[i].companyOrPlace, me.previousExperience[i].title, me.previousExperience[i].description)
}

// You must have a function called displaySkill that takes parameters for skill name and a boolean value for whether the skill is cool (true/false). Inside the function, you should print BAM: in front of the skill name only if the skill is cool. If you don't have any cool skills, make some up.
function displaySkill(name, cool) {
    console.log(`* ${cool ? 'BAM: ' : ''}${name}`)
}
// A list of your skills
console.log(`My Skills:`)
for (let i = 0; i < me.skills.length; i++) {
    displaySkill(me.skills[i].name, me.skills[i].cool)
}