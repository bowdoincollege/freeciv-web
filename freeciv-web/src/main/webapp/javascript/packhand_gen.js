 /* Generated by generate_js_hand.py */
function client_handle_packet(p) 
{
 if (p == null) return;
 try {
  for (var i = 0; i < p.length; i++) {
    if (p[i] == null) continue;
    var packet_type = p[i]['pid'];
    switch (packet_type) {

    case  0:
      handle_processing_started(p[i]);
      break;

    case  1:
      handle_processing_finished(p[i]);
      break;

    case  2:
      handle_freeze_hint(p[i]);
      break;

    case  3:
      handle_thaw_hint(p[i]);
      break;

    case  5:
      handle_server_join_reply(p[i]);
      break;

    case  6:
      handle_authentication_req(p[i]);
      break;

    case  8:
      handle_server_shutdown(p[i]);
      break;

    case  13:
      handle_endgame_report(p[i]);
      break;

    case  14:
      handle_tile_info(p[i]);
      break;

    case  15:
      handle_game_info(p[i]);
      break;

    case  16:
      handle_map_info(p[i]);
      break;

    case  17:
      handle_nuke_tile_info(p[i]);
      break;

    case  18:
      handle_chat_msg(p[i]);
      break;

    case  20:
      handle_city_remove(p[i]);
      break;

    case  21:
      handle_city_info(p[i]);
      break;

    case  22:
      handle_city_short_info(p[i]);
      break;

    case  36:
      handle_city_name_suggestion_info(p[i]);
      break;

    case  37:
      handle_city_sabotage_list(p[i]);
      break;

    case  38:
      handle_player_remove(p[i]);
      break;

    case  39:
      handle_player_info(p[i]);
      break;

    case  47:
      handle_player_attribute_chunk(p[i]);
      break;

    case  48:
      handle_unit_remove(p[i]);
      break;

    case  49:
      handle_unit_info(p[i]);
      break;

    case  50:
      handle_unit_short_info(p[i]);
      break;

    case  51:
      handle_unit_combat_info(p[i]);
      break;

    case  58:
      handle_ruleset_specialist(p[i]);
      break;

    case  71:
      handle_unit_diplomat_answer(p[i]);
      break;

    case  74:
      handle_diplomacy_init_meeting(p[i]);
      break;

    case  76:
      handle_diplomacy_cancel_meeting(p[i]);
      break;

    case  78:
      handle_diplomacy_create_clause(p[i]);
      break;

    case  80:
      handle_diplomacy_remove_clause(p[i]);
      break;

    case  82:
      handle_diplomacy_accept_treaty(p[i]);
      break;

    case  84:
      handle_page_msg(p[i]);
      break;

    case  86:
      handle_conn_info(p[i]);
      break;

    case  87:
      handle_conn_ping_info(p[i]);
      break;

    case  88:
      handle_conn_ping(p[i]);
      break;

    case  90:
      handle_end_phase(p[i]);
      break;

    case  91:
      handle_start_phase(p[i]);
      break;

    case  92:
      handle_new_year(p[i]);
      break;

    case  95:
      handle_spaceship_info(p[i]);
      break;

    case  96:
      handle_ruleset_unit(p[i]);
      break;

    case  97:
      handle_ruleset_game(p[i]);
      break;

    case  98:
      handle_ruleset_government_ruler_title(p[i]);
      break;

    case  99:
      handle_ruleset_tech(p[i]);
      break;

    case  100:
      handle_ruleset_government(p[i]);
      break;

    case  101:
      handle_ruleset_terrain_control(p[i]);
      break;

    case  102:
      handle_ruleset_nation(p[i]);
      break;

    case  103:
      handle_ruleset_city(p[i]);
      break;

    case  104:
      handle_ruleset_building(p[i]);
      break;

    case  105:
      handle_ruleset_terrain(p[i]);
      break;

    case  106:
      handle_ruleset_control(p[i]);
      break;

    case  109:
      handle_single_want_hack_reply(p[i]);
      break;

    case  111:
      handle_game_load(p[i]);
      break;

    case  112:
      handle_options_settable_control(p[i]);
      break;

    case  113:
      handle_options_settable(p[i]);
      break;

    case  115:
      handle_ruleset_choices(p[i]);
      break;

    case  118:
      handle_ruleset_nation_groups(p[i]);
      break;

    case  119:
      handle_ruleset_unit_class(p[i]);
      break;

    case  120:
      handle_ruleset_base(p[i]);
      break;

    case  122:
      handle_ruleset_effect(p[i]);
      break;

    case  123:
      handle_ruleset_effect_req(p[i]);
      break;

    case  124:
      handle_ruleset_resource(p[i]);
      break;

    case  135:
      handle_freeze_client(p[i]);
      break;

    case  136:
      handle_thaw_client(p[i]);
      break;

    case  137:
      handle_begin_turn(p[i]);
      break;

    case  138:
      handle_end_turn(p[i]);
      break;

    case  140:
      handle_scenario_info(p[i]);
      break;

    case  145:
      handle_vote_new(p[i]);
      break;

    case  146:
      handle_vote_update(p[i]);
      break;

    case  147:
      handle_vote_remove(p[i]);
      break;

    case  148:
      handle_vote_resolve(p[i]);
      break;

    case  181:
      handle_edit_object_created(p[i]);
      break;

    case  182:
      handle_connect_msg(p[i]);
      break;

    case  185:
      handle_goto_path(p[i]);
      break;

    case  187:
      handle_info_text_message(p[i]);
      break;
 
    }
  }
 
  if (p.length > 0) {
    if (debug_active) clinet_debug_collect();
    update_map_canvas_full();
  }

 } catch(e) {
   if (e.message != null && e.fileName != null && e.lineNumber != null) {
     js_breakpad_report(e.message, e.fileName, e.lineNumber);
   } else if (e.message != null) {
     js_breakpad_report(e.message, "generate_js_hand.py", 0);
   } else {
     js_breakpad_report("unknown network error", "generate_js_hand.py", 0);
   }
 }

}
