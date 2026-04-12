# Developer API

**Cartel Island Heist does not expose a public developer API.**

The script is fully self-contained — all state is server-authoritative and internal events, `GlobalState` keys, and NUI callbacks are implementation details that may change between versions without notice.

::: warning
Do not build integrations that rely on internal events or `GlobalState` keys. They are not part of any stability contract, and triggering them from outside the resource is not supported.
:::

## Supported integration points

The only supported ways to integrate other resources with the heist are through the editable files and configuration:

- **Police dispatch** — see [Customization → Dispatch Integration](/rc_cartel_heist/customization/dispatch-integration)
- **Framework hooks** — modify `client/editable/esx.lua`, `client/editable/qb.lua`, and the matching server-side files
- **Custom loot rewards** — see [Customization → Custom Loot Rewards](/rc_cartel_heist/customization/loot-rewards)
- **SQL driver** — see [Customization → NPC Models & SQL Driver](/rc_cartel_heist/customization/npc-models)

If you need a specific integration point that isn't listed here, please [open a ticket on Discord](https://robicore.com).
