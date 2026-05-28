import { jsxs as s, Fragment as k, jsx as t } from "react/jsx-runtime";
import { useState as u, useCallback as v } from "react";
/* empty css                                               */
import "../../../../../../components/badge/badge.js";
import "../../../../../../components/banner/banner-actions.js";
import "../../../../../../components/banner/banner-body.js";
import "../../../../../../components/banner/banner-close.js";
import "../../../../../../components/banner/banner-content.js";
import "../../../../../../components/banner/banner-icon.js";
import "../../../../../../components/banner/banner-root.js";
import "../../../../../../components/banner/banner-title.js";
import "../../../../../../components/calendar/calendar.js";
import "../../../../../../components/chip/action-chip/action-chip.js";
import "../../../../../../components/chip/input-chip/input-chip.js";
import "../../../../../../components/chip/selection-chip/selection-chip.js";
import "../../../../../../components/collapsible/collapsible-content.js";
import "../../../../../../components/collapsible/collapsible-root.js";
import "../../../../../../components/collapsible/collapsible-trigger.js";
import "../../../../../../components/command/command-empty.js";
import "../../../../../../components/command/command-group.js";
import "../../../../../../components/command/command-input.js";
import "../../../../../../components/command/command-item.js";
import "../../../../../../components/command/command-list.js";
import "../../../../../../components/command/command-root.js";
import "../../../../../../components/drawer/drawer-body.js";
import "../../../../../../components/drawer/drawer-button-trigger.js";
import "../../../../../../components/drawer/drawer-content.js";
import "../../../../../../components/drawer/drawer-footer.js";
import "../../../../../../components/drawer/drawer-header.js";
import "../../../../../../components/drawer/drawer-root.js";
import "../../../../../../components/drawer/drawer-trigger.js";
import "../../../../../../components/dropdown-menu/dropdown-menu-checkbox-item.js";
import "../../../../../../components/dropdown-menu/dropdown-menu-content.js";
import "../../../../../../components/dropdown-menu/dropdown-menu-item.js";
import "../../../../../../components/dropdown-menu/dropdown-menu-label.js";
import "../../../../../../components/dropdown-menu/dropdown-menu-radio.js";
import "../../../../../../components/dropdown-menu/dropdown-menu-root.js";
import { DropdownMenuScrollable as y } from "../../../../../../components/dropdown-menu/dropdown-menu-scrollable.js";
import "../../../../../../components/dropdown-menu/dropdown-menu-separator.js";
import "../../../../../../components/dropdown-menu/dropdown-menu-single-select.js";
import "../../../../../../components/dropdown-menu/dropdown-menu-sub.js";
import "../../../../../../components/dropdown-menu/dropdown-menu-sub-content.js";
import "../../../../../../components/dropdown-menu/dropdown-menu-sub-trigger.js";
import "../../../../../../components/dropdown-menu/dropdown-menu-trigger.js";
import "../../../../../../components/empty-state/empty-state-actions.js";
import "../../../../../../components/empty-state/empty-state-body.js";
import "../../../../../../components/empty-state/empty-state-content.js";
import "../../../../../../components/empty-state/empty-state-root.js";
import "../../../../../../components/empty-state/empty-state-title.js";
import "../../../../../../components/list/list-element-description.js";
import "../../../../../../components/list/list-element-prefix.js";
import "../../../../../../components/list/list-element-root.js";
import "../../../../../../components/list/list-element-suffix.js";
import "../../../../../../components/list/list-element-title.js";
import "../../../../../../components/modal/modal-body.js";
import "../../../../../../components/modal/modal-button-trigger.js";
import "../../../../../../components/modal/modal-content.js";
import "../../../../../../components/modal/modal-description.js";
import "../../../../../../components/modal/modal-footer.js";
import "../../../../../../components/modal/modal-header.js";
import "../../../../../../components/modal/modal-root.js";
import "../../../../../../components/modal/modal-title.js";
import "../../../../../../components/modal/modal-trigger.js";
import "../../../../../../primitives/avatar/avatar-fallback.js";
import "../../../../../../primitives/avatar/avatar-image.js";
import "../../../../../../primitives/avatar/avatar-root.js";
import "../../../../../../primitives/button/button.js";
import "../../../../../../primitives/card/card.js";
import "../../../../../../primitives/checkbox/checkbox.js";
import "../../../../../../primitives/icon/icon.js";
import "../../../../../../primitives/illustration/illustration.js";
import "../../../../../../primitives/input/input-description.js";
import "../../../../../../primitives/input/input-error.js";
import "../../../../../../primitives/input/input-field.js";
import "../../../../../../primitives/input/input-group.js";
import "../../../../../../primitives/input/input-label.js";
import "../../../../../../primitives/input/input-left-addon.js";
import "../../../../../../primitives/input/input-right-addon.js";
import "../../../../../../primitives/input/input-root.js";
import "../../../../../../primitives/link/link.js";
import "../../../../../../primitives/loading-spinner/loading-spinner.js";
import "../../../../../../primitives/logo/logo.js";
import "../../../../../../primitives/progress-tracker/progress-tracker.js";
import "../../../../../../primitives/title-input/title-input.js";
import "../../../../../../primitives/toggle/toggle.js";
import "../../../../../../foundations/layout/box/box.js";
import "../../../../../../foundations/layout/inline/inline.js";
import "../../../../../../foundations/layout/stack/stack.js";
import "../../../../../../foundations/typography/heading/heading.js";
import "../../../../../../foundations/typography/text/text.js";
import "../../../../../../components/radio-group/radio-group-indicator.js";
import "../../../../../../components/radio-group/radio-group-item.js";
import "../../../../../../components/radio-group/radio-group-label.js";
import "../../../../../../components/radio-group/radio-group-root.js";
import "../../../../../../components/segmented-control/segmented-control-item.js";
import "../../../../../../components/segmented-control/segmented-control-root.js";
import "../../../../../../components/select/multi-select/multi-select-item.js";
import "@radix-ui/react-popover";
import "../../../../../../primitives/input/input-root.context.js";
import "../../../../../../components/select/shared/select-item.js";
import "../../../../../../components/table/table-body.js";
import "../../../../../../components/table/table-cell.js";
import "../../../../../../components/table/table-column-header-cell.js";
import "../../../../../../components/table/table-header.js";
import "../../../../../../components/table/table-root.js";
import "../../../../../../components/table/table-row.js";
import "../../../../../../components/table/table-row-header-cel.js";
import "../../../../../../components/tabs/tabs-action.js";
import "../../../../../../components/tabs/tabs-content.js";
import "../../../../../../components/tabs/tabs-list.js";
import "../../../../../../components/tabs/tabs-root.js";
import "../../../../../../components/tabs/tabs-trigger.js";
import "../../../../../../components/thumbnail/thumbnail.js";
import "../../../../../../components/toast/shared/toast-action.js";
import "../../../../../../components/toast/shared/toast-close.js";
import "../../../../../../components/toast/shared/toast-description.js";
import "../../../../../../components/toast/shared/toast-icon.js";
import "../../../../../../components/toast/message-toast/message-toast-body.js";
import "../../../../../../components/toast/message-toast/message-toast-root.js";
import "../../../../../../components/toast/message-toast/message-toast-title.js";
import "../../../../../../components/toast/message-toast/message-toast-provider.js";
import "../../../../../../components/toast/message-toast/message-toast-viewport.js";
import "../../../../../../components/toast/providers/message-toast-provider/message-toast-state-context.js";
import "../../../../../../components/tooltip/tooltip-badge-trigger.js";
import "../../../../../../components/tooltip/tooltip-content.js";
import "../../../../../../components/tooltip/tooltip-root.js";
import "../../../../../../components/tooltip/tooltip-trigger.js";
import "../../../../../action-panel/action-panel-close.js";
import "../../../../../action-panel/action-panel-content.js";
import "../../../../../action-panel/action-panel-root.js";
import "../../../../../action-panel/action-panel-separator.js";
import "../../../../../data-card/data-card.change-indicator.js";
import "../../../../../data-card/data-card.content.js";
import "../../../../../data-card/data-card.header.js";
import "../../../../../data-card/data-card.root.js";
import "../../../../../data-card/data-card.title.js";
import "../../../../../data-card/data-card.value.js";
import "../../../custom/filter-custom.js";
import "../../../filter-menu.context.js";
import "../../../calendar/filter-calendar.js";
import "../../../calendar/filter-calendar.footer.js";
import "../../../calendar/filter-calendar.footer-apply.js";
import "../../../calendar/filter-calendar.footer-separator.js";
import "../../../calendar/filter-calendar.with-presets.js";
import "./filter-select.async.js";
import "../paginated/filter-select.async-paginated.js";
import "../../sync/filter-select.sync.js";
import "../../../filter-menu.js";
import "../../../../../navigation/navigation-heading.js";
import "../../../../../navigation/navigation-item.js";
import "../../../../../navigation/navigation-list.js";
import "../../../../../navigation/navigation-root.js";
import "../../../../../navigation/navigation-subitem.js";
import "../../../../../navigation/navigation-subtitle.js";
import "../../../../../page-header/page-header-description.js";
import "../../../../../page-header/page-header-header.js";
import "../../../../../page-header/page-header-root.js";
import "../../../../../page-header/page-header-title.js";
import "../../../../../product-menu/product-menu-root.js";
import "../../../../../sidebar/sidebar-dropdown-menu-trigger.js";
import "../../../../../sidebar/sidebar-item.js";
import "../../../../../sidebar/sidebar-logo.js";
import "../../../../../sidebar/sidebar-section.js";
import "../../../../../sidebar/sidebar-separator.js";
import "../../../../../sidebar/sidebar-wrapper.js";
import { FilterSelectApply as j } from "../../filter-select.apply.js";
import { FilterSelectCheckboxItems as M } from "../../filter-select.checkbox-items.js";
import { FilterSelectMenuRadioItems as R } from "../../filter-select.radio-items.js";
import { FilterSelectSearch as w } from "../../filter-select.search.js";
import { useFilteredOptions as D } from "../../use-filtered-options.js";
import { FilterSelectAsyncLoading as F } from "../filter-select.async-loading.js";
const Po = ({
  options: m,
  optionsEmptyLabel: e,
  value: d,
  searchable: S,
  searchPlaceholder: h,
  isFetchingOptions: r,
  isFetchingOptionsError: p,
  Error: C,
  multiple: l,
  applyLabel: I,
  onValueApplyChange: c,
  onOpenFilter: i
}) => {
  const [o, a] = u(d), [n, b] = u(""), f = D(m, n), x = () => {
    c(o);
  }, A = v(
    (g) => {
      g !== null && (i == null || i());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return /* @__PURE__ */ s(k, { children: [
    S && !p && /* @__PURE__ */ t(
      w,
      {
        placeholder: h,
        value: n,
        onChange: b
      }
    ),
    /* @__PURE__ */ s(y, { ref: A, children: [
      p && !r ? C : r && m.length === 0 ? null : l ? /* @__PURE__ */ t(
        M,
        {
          options: f,
          optionsEmptyLabel: e,
          value: o,
          onChange: a
        }
      ) : /* @__PURE__ */ t(
        R,
        {
          options: f,
          optionsEmptyLabel: e,
          value: o,
          onChange: a
        }
      ),
      r && /* @__PURE__ */ t(F, {})
    ] }),
    !p && /* @__PURE__ */ t(
      j,
      {
        disabled: r || m.length === 0,
        label: I,
        onApply: x
      }
    )
  ] });
};
export {
  Po as FilterSelectAsyncContent
};
