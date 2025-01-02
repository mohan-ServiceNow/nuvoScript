Problem Description:
1. Random sys_id Attachment to RITM:
When a user is added to the watchlist on a catalog task (SC_Task), a random sys_id is also being attached to the associated RITM (Request Item), causing inconsistency.
2. Watchlist Not Reflecting Changes on RITM:
When a user is removed from the catalog task’s watchlist, this change is not reflected in the associated RITM. The user still appears on the RITM’s watchlist.
3. Improper Watchlist Copying:
The watchlist is not being copied correctly from the catalog task to the RITM, leading to synchronization issues between these two entities.

Use Case:
Goal:
Ensure that any user added to the watchlist of a catalog task is also added to the corresponding RITM.
Ensure that if a user is removed from the catalog task’s watchlist, they are also removed from the corresponding RITM’s watchlist.
Prevent duplicate users from appearing on both the catalog task and RITM’s watchlist.

Solution Overview:
To address the above problem, a script will be developed to ensure that:
1. Synchronization: When a user is added or removed from the catalog task’s watchlist, the change will reflect on the associated RITM.
2. No Duplicate Users: The same user will not appear on both the catalog task and RITM’s watchlist.
3. Watchlist Copying: The initial watchlist of the catalog task will be properly copied to the RITM.
