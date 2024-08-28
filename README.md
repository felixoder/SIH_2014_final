
# WeLearn - The true destination for Smart Education

This is the place where We will be updating the details of our SIH 2024 hackathon's project prototype.

## System Design of the project


![Project Image](https://github.com/felixoder/SIH_2024_final/blob/master/public/idea.png)


## SetUp - for Contribution

Go through the details if you want to run the project locally.

1. Fork the repository https://github.com/felixoder/SIH_2024_final.git and create a version on your github.
2. Clone your own repository like in my case 

```bash
  git clone https://github.com/felixoder/SIH_2024_final.git
  
```
3. install 

```bash
    pnpm/npm install  or  yarn add
```
4. ## Add DOTenv
   go to the root of the project and create a .env

   ## Hint: Go to https://clerk.com and create an authencication method and add these in your dotenv

```bash

  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_pk
CLERK_SECRET_KEY=your_test
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```



5. Do the changes
6. do 

```bash
    git add .
    git commit -m "Your commit message/ preferred as like: solved issue 115 like that"
    git branch your_branch_name
    git push origin your_branch_name

```
7. Now add the PR on main branch and wait for being merged!





## Deployment

To start this project run

```bash
  npm/pnpm run dev
```

The main project is deployed on www.welearn.solutions


## License

[MIT](https://choosealicense.com/licenses/mit/)

## Code of Conduct

[CONDUCT](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)
