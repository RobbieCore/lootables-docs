# NPC Models

Change the cartel guard models:

```lua
Config.cartelNPCModels = {
    'A_M_M_EastSA_01',
    'CSB_Ramp_mex',
    'IG_Hao',
    'IG_Hao_02',
    'IG_Ortega',
    'S_M_Y_Robber_01',
}
```

Add or remove model hashes to fit your server's theme. One model is picked from this list at random for each guard spawn.

## SQL Driver

The script supports multiple SQL drivers:

```lua
Config.sqlDriver = 'mysql'   -- 'mysql' (mysql-async) or 'oxmysql'
```

The SQL abstraction is in `server/editable/functions.lua` and can be modified to support additional drivers.
