# GQL JOB WEB APP 

Architecture: 
  - Apollo + SSR + SGR

Pages: 

 - Authorization [Static + No regeneration + No Fallback]
   - Register page
   - Login Page
   - Logout Page
   - Verify Email Page 
   - Reset password Page
 - Jobs   
   - Jobs List Page [SSR]
   - Create\Edit Job Page [Static / SSR ]
   - Job Page [Static + Static Paths + Regeneration + Fallback] (How to deal with authorization)
 - User [SRR] 
   - Profile Widget 
   - Profile Page, Edit Profile [Static?]
