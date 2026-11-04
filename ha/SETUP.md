# Live sync setup

The `live` branch holds the files Home Assistant actually runs:

| Repo path | Copied to in Home Assistant |
| --- | --- |
| `www/merci-home/*` | `/config/www/merci-home/` (served as `/local/merci-home/...`) |
| `dashboards/my-home.yaml` | `/config/dashboards/my-home.yaml` |

`main` stays reserved for the generalized public release.

## One-time setup in Home Assistant

1. Add the line from `ha/secrets.example.yaml` to `/config/secrets.yaml`
   (public or private variant).
2. Paste the blocks from `ha/merci_home_sync.yaml` into
   `/config/configuration.yaml`, merging with any existing
   `shell_command:` or `lovelace:` section.
3. Developer tools → YAML → Check configuration, then restart.
4. A new sidebar entry **My Home (Claude)** appears. The original
   **My Home** dashboard is not changed.

## Each update

1. Commit to the `live` branch.
2. Run the action `shell_command.merci_home_pull`
   (Developer tools → Actions, or via the REST API:
   `POST /api/services/shell_command/merci_home_pull`).
3. Refresh the dashboard. After JavaScript changes, bump the `?v=` on the
   resource URL (Settings → Dashboards → ⋮ → Resources) or hard-refresh so
   the browser doesn't keep the old file.

## Rolling back

Revert the commit on `live` and run the pull again.
