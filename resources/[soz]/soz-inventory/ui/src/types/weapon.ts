// temporary need to be reworked and moved to core
export enum WeaponName {
    // Handguns
    PISTOL = 'weapon_pistol',
    PISTOL_MK2 = 'weapon_pistol_mk2',
    REVOLVER_MK2 = 'weapon_revolver_mk2',
    COMBATPISTOL = 'weapon_combatpistol',
    APPISTOL = 'weapon_appistol',
    PISTOL50 = 'weapon_pistol50',
    SNSPISTOL = 'weapon_snspistol',
    HEAVYPISTOL = 'weapon_heavypistol',
    VINTAGEPISTOL = 'weapon_vintagepistol',
    FLAREGUN = 'weapon_flaregun',
    MARKSMANPISTOL = 'weapon_marksmanpistol',
    REVOLVER = 'weapon_revolver',
    DOUBLEACTION = 'weapon_doubleaction',
    SNSPISTOL_MK2 = 'weapon_snspistol_mk2',
    CERAMICPISTOL = 'weapon_ceramicpistol',
    NAVYREVOLVER = 'weapon_navyrevolver',
    GADGETPISTOL = 'weapon_gadgetpistol',
    PISTOLXM3 = 'weapon_pistolxm3',

    // SMG
    MICROSMG = 'weapon_microsmg',
    SMG = 'weapon_smg',
    ASSAULTSMG = 'weapon_assaultsmg',
    COMBATPDW = 'weapon_combatpdw',
    SMG_MK2 = 'weapon_smg_mk2',
    MACHINEPISTOL = 'weapon_machinepistol',
    MINISMG = 'weapon_minismg',
    RAYCARBINE = 'weapon_raycarbine',
    TECPISTOL = 'weapon_tecpistol',

    // Assault Rifles
    ASSAULTRIFLE = 'weapon_assaultrifle',
    ASSAULTRIFLE_MK2 = 'weapon_assaultrifle_mk2',
    CARBINERIFLE = 'weapon_carbinerifle',
    CARBINERIFLE_MK2 = 'weapon_carbinerifle_mk2',
    ADVANCEDRIFLE = 'weapon_advancedrifle',
    SPECIALCARBINE = 'weapon_specialcarbine',
    BULLPUPRIFLE = 'weapon_bullpuprifle',
    COMPACTRIFLE = 'weapon_compactrifle',
    SPECIALCARBINE_MK2 = 'weapon_specialcarbine_mk2',
    BULLPUPRIFLE_MK2 = 'weapon_bullpuprifle_mk2',
    MILITARYRIFLE = 'weapon_militaryrifle',
    HEAVYRIFLE = 'weapon_heavyrifle',
    TACTICALRIFLE = 'weapon_tacticalrifle',
    BATTLERIFLE = 'weapon_battlerifle',

    // Shotguns
    PUMPSHOTGUN = 'weapon_pumpshotgun',
    SAWNOFFSHOTGUN = 'weapon_sawnoffshotgun',
    ASSAULTSHOTGUN = 'weapon_assaultshotgun',
    BULLPUPSHOTGUN = 'weapon_bullpupshotgun',
    MUSKET = 'weapon_musket',
    HEAVYSHOTGUN = 'weapon_heavyshotgun',
    DBSHOTGUN = 'weapon_dbshotgun',
    AUTOSHOTGUN = 'weapon_autoshotgun',
    PUMPSHOTGUN_MK2 = 'weapon_pumpshotgun_mk2',
    COMBATSHOTGUN = 'weapon_combatshotgun',

    // Machine Guns
    MG = 'weapon_mg',
    COMBATMG = 'weapon_combatmg',
    GUSENBERG = 'weapon_gusenberg',
    COMBATMG_MK2 = 'weapon_combatmg_mk2',

    // Heavy Weapons
    RPG = 'weapon_rpg',
    GRENADELAUNCHER = 'weapon_grenadelauncher',
    GRENADELAUNCHER_SMOKE = 'weapon_grenadelauncher_smoke',
    MINIGUN = 'weapon_minigun',
    FIREWORK = 'weapon_firework',
    RAILGUN = 'weapon_railgun',
    HOMINGLAUNCHER = 'weapon_hominglauncher',
    COMPACTLAUNCHER = 'weapon_compactlauncher',
    RAYMINIGUN = 'weapon_rayminigun',
    EMPLAUNCHER = 'weapon_emplauncher',
    RAILGUNXM3 = 'weapon_railgunxm3',
    SNOWLAUNCHER = 'weapon_snowlauncher',

    // Sniper Rifles
    SNIPERRIFLE = 'weapon_sniperrifle',
    HEAVYSNIPER = 'weapon_heavysniper',
    HEAVYSNIPER_MK2 = 'weapon_heavysniper_mk2',
    MARKSMANRIFLE = 'weapon_marksmanrifle',
    MARKSMANRIFLE_MK2 = 'weapon_marksmanrifle_mk2',
    PRECISIONRIFLE = 'weapon_precisionrifle',
}

export const WeaponAmmo: {[key: string]: string} = {
    [WeaponName.PISTOL]: '9x19 AP',
    [WeaponName.PISTOL_MK2]: '9x19 AP',
    [WeaponName.REVOLVER_MK2]: '.357 Magnum',
    [WeaponName.COMBATPISTOL]: '9x19 AP',
    [WeaponName.APPISTOL]: '9x19 AP',
    [WeaponName.PISTOL50]: '.357 Magnum',
    [WeaponName.SNSPISTOL]: '9x19 AP',
    [WeaponName.HEAVYPISTOL]: '9x19 AP',
    [WeaponName.VINTAGEPISTOL]: '9x19 AP',
    [WeaponName.FLAREGUN]: 'Flair',
    [WeaponName.MARKSMANPISTOL]: '9x19 AP',
    [WeaponName.REVOLVER]: '.357 Magnum',
    [WeaponName.DOUBLEACTION]: '.357 Magnum',
    [WeaponName.SNSPISTOL_MK2]: '9x19 AP',
    [WeaponName.CERAMICPISTOL]: '9x19 AP',
    [WeaponName.NAVYREVOLVER]: '.357 Magnum',
    [WeaponName.GADGETPISTOL]: '9x19 AP',
    [WeaponName.PISTOLXM3]: '9x19 AP',
    [WeaponName.MICROSMG]: '9x19 AP',
    [WeaponName.SMG]: '9x19 AP',
    [WeaponName.ASSAULTSMG]: '5.7x28 SB193',
    [WeaponName.COMBATPDW]: '9x19 AP',
    [WeaponName.SMG_MK2]: '5.7x28 SB193',
    [WeaponName.MACHINEPISTOL]: '9x19 AP',
    [WeaponName.MINISMG]: '9x19 AP',
    [WeaponName.RAYCARBINE]: 'Munition Alien',
    [WeaponName.TECPISTOL]: '9x19 AP',
    [WeaponName.ASSAULTRIFLE]: '7.62x39 BP',
    [WeaponName.ASSAULTRIFLE_MK2]: '7.62x39 BP',
    [WeaponName.CARBINERIFLE]: '5.56x45 M995',
    [WeaponName.CARBINERIFLE_MK2]: '5.56x45 M995',
    [WeaponName.ADVANCEDRIFLE]: '7.62x51 M62',
    [WeaponName.SPECIALCARBINE]: '5.56x45 M995',
    [WeaponName.BULLPUPRIFLE]: '5.56x45 M995',
    [WeaponName.COMPACTRIFLE]: '5.56x45 M995',
    [WeaponName.SPECIALCARBINE_MK2]: '5.56x45 M995',
    [WeaponName.BULLPUPRIFLE_MK2]: '7.62x39 BP',
    [WeaponName.MILITARYRIFLE]: '7.62x51 M62',
    [WeaponName.HEAVYRIFLE]: '7.62x51 M62',
    [WeaponName.TACTICALRIFLE]: '5.56x45 M995',
    [WeaponName.BATTLERIFLE]: '7.62x51 M62',
    [WeaponName.PUMPSHOTGUN]: 'Billes caoutchouc',
    [WeaponName.SAWNOFFSHOTGUN]: '12/70 Buckshot',
    [WeaponName.ASSAULTSHOTGUN]: '12/70 Buckshot',
    [WeaponName.BULLPUPSHOTGUN]: '12/70 Buckshot',
    [WeaponName.MUSKET]: 'Lead Bullet',
    [WeaponName.HEAVYSHOTGUN]: '12/70 Buckshot',
    [WeaponName.DBSHOTGUN]: '12/70 Buckshot',
    [WeaponName.AUTOSHOTGUN]: '12/70 Buckshot',
    [WeaponName.PUMPSHOTGUN_MK2]: '12/70 Buckshot',
    [WeaponName.COMBATSHOTGUN]: '12/70 Buckshot',
    [WeaponName.MG]: '12,7x108 BZT-44M',
    [WeaponName.COMBATMG]: '12,7x108 BZT-44M',
    [WeaponName.GUSENBERG]: '12,7x108 BZT-44M',
    [WeaponName.COMBATMG_MK2]: '12,7x108 BZT-44M',
    [WeaponName.RPG]: '85mm PG-7',
    [WeaponName.GRENADELAUNCHER]: '40x46mm M381',
    [WeaponName.GRENADELAUNCHER_SMOKE]: '40x46mm M381',
    [WeaponName.MINIGUN]: '12,7x108 BZT-44M',
    [WeaponName.FIREWORK]: '85mn Artifice',
    [WeaponName.RAILGUN]: 'Munition Alien',
    [WeaponName.HOMINGLAUNCHER]: 'AIM-9X',
    [WeaponName.COMPACTLAUNCHER]: '40x46mm M381',
    [WeaponName.RAYMINIGUN]: 'Munition Alien',
    [WeaponName.EMPLAUNCHER]: 'Munition Alien',
    [WeaponName.RAILGUNXM3]: 'Munition Alien',
    [WeaponName.SNIPERRIFLE]: '.50 BMG',
    [WeaponName.HEAVYSNIPER]: '.50 BMG',
    [WeaponName.HEAVYSNIPER_MK2]: '.50 BMG',
    [WeaponName.MARKSMANRIFLE]: '7.62x51 M62',
    [WeaponName.MARKSMANRIFLE_MK2]: '7.62x51 M62',
    [WeaponName.PRECISIONRIFLE]: '.50 BMG',
}
