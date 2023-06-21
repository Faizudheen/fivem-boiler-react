

RegisterCommand('show',function ()
    SetNuiFocus(true,true)
    SendNUIMessage({
        action = 'open'
    })
end)


RegisterNuiCallback('getCoords',function (data,cb)
    local Coords = GetEntityCoords(PlayerPedId())
    local data<const> =  {x = Coords.x, y = Coords.y, z = Coords.z}
    cb(data)
end)

RegisterNuiCallback('hide',function (data,cb)
    SetNuiFocus(false,false)
    local data = "done"
    cb(data)
end)

RegisterKeyMapping('show','Open Coords','keyboard','F9')