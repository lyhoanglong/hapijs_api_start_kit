### Getting start with api start kit

1. Copy .env.example to .env
2. Edit .env to config database.

3. Generate migration file
```
npm run db:migration file_name
```

4. Running migrations
```
npm run db:migrate
```

5. Rolling back migrations
```
npm run db:rollback
```
6. Start server
```
npm run dev
```
