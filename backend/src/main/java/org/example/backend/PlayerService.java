package org.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PlayerService {

    private final PlayerRepo playerRepo;

    Player getPlayerById(String id){
        return playerRepo.findById(id).orElseThrow();
    }

    Player createPlayer(PlayerDTO newPlayerDTO){
    return playerRepo.save(new Player(UUID.randomUUID().toString(), newPlayerDTO.username(), newPlayerDTO.password(), 0L, List.of()));
    }

    Long getScoreById(String id){
        return playerRepo.findById(id).orElseThrow().score();
    }

    Player updateScoreById(String id, String score){
        Player player = playerRepo.findById(id).orElseThrow();
        return playerRepo.save(player.withScore(Long.parseLong(score)));
    }

}
