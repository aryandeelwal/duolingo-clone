## Duolingo Clone 

[https://duolingo-clone-mu.vercel.app/](https://duolingo-clone-mu.vercel.app/)

![LingoPage](https://raw.githubusercontent.com/aryandeelwal/duolingo-clone/4b1715ccc086af170d2e7436323cd5f95fecc188/learn.png)

![LingoQuizPage](https://raw.githubusercontent.com/aryandeelwal/duolingo-clone/4b1715ccc086af170d2e7436323cd5f95fecc188/quiz.png)

![LingoQuizCompletePage](https://raw.githubusercontent.com/aryandeelwal/duolingo-clone/4b1715ccc086af170d2e7436323cd5f95fecc188/unit_complete.png)

![LingoAdminDashboardPage](https://raw.githubusercontent.com/aryandeelwal/duolingo-clone/4b1715ccc086af170d2e7436323cd5f95fecc188/admin_dashboard.png)


### Tech Stack
```
Next.js
Tailwind
Clerk
NeonDB
Drizzle ORM
React-admin
Stripe
shadcn/ui
```

Key Features:

- React-admin dashboard for data upload
- Stripe integration. For subscription use, [Stripe Testing Cards](https://stripe.com/docs/testing)
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices
- Credential authentication with Clerk
- Google authentication integration
- Server error handling with react-toast
- Practice system
- Stripe recurring payment integration
- How to write POST, GET, and DELETE routes in route handlers (app/api)
- Handling relations between Server and Child components in a real-time environment
- Update Stripe subscriptions

### Cloning the repository

```shell
git clone https://github.com/aryandeelwal/duolingo-clone.git
```
### Install packages

```shell
npm i
```
### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=
STRIPE_WEBHOOK_SECRET=
```

### Start the app

```shell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
